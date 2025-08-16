import { useParams, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus'
import { getArticleById } from '@/store/articlesDetails.ts'
import styled from 'styled-components'
// import 'prismjs/themes/prism.css' // 默认主题
import 'prismjs/themes/prism-okaidia.css' // Okaidia 主题
// import 'prismjs/themes/prism-solarizedlight.css' // 浅色主题
import 'prismjs/plugins/line-numbers/prism-line-numbers.css' // 添加此行导入行号样式
// import 'prismjs/themes/prism-tomorrow.css' // Tomorrow 主题
import { useTheme } from '@/contexts/ThemeContext'
import { CategoryBadge, ArticleDate } from '@/pages/Articles/index.tsx'

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>()
  const { theme } = useTheme()
  const article = getArticleById(id || '')
  if (!article) {
    return <Navigate to="/404" replace />
  }
  return (
    <ArticleContainer theme={theme}>
      <Title>{article.title}</Title>
      <MetadataContainer>
        <TagsContainer>
          {article.tags.map((tag) => (
            <CategoryBadge key={tag}>{tag}</CategoryBadge>
          ))}
        </TagsContainer>
        <ArticleDate>{article.date}</ArticleDate>
      </MetadataContainer>
      <ArticleContent>
        <ReactMarkdown
          rehypePlugins={[[rehypePrism, { ignoreMissing: true, showLineNumbers: true }]]}
        >
          {article.content}
        </ReactMarkdown>
      </ArticleContent>
    </ArticleContainer>
  )
}

// 样式组件
const ArticleContainer = styled.article<{ theme: any }>`
  max-width: 1000px;
  margin: 0 auto;
  color: ${(props) => props.theme.textColor};
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

const MetadataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const ArticleContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;

  /* Markdown内容样式 */
  h2,
  h3 {
    margin: 1.5rem 0 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  pre {
    margin: 1.5rem 0;
    padding: 1rem 1rem 1rem 3rem; /* 增加左侧内边距容纳行号 */
    background: #f5f5f5;
    border-radius: 8px;
    overflow-x: auto;
    position: relative; /* 添加定位上下文 */
  }
  code {
    font-family: 'Fira Code', monospace;
  }
  ul,
  ol {
    margin: 1rem 0 1rem 2rem;
  }
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }
`
