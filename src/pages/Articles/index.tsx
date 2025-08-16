import styled from 'styled-components'
import { articles } from '@/store/articlesData.ts'

const Articles = () => {
  return (
    <PageContainer>
      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <MetadataContainer>
              <CategoryBadge>{article.category}</CategoryBadge>
              <ArticleDate>{article.date}</ArticleDate>
            </MetadataContainer>
            <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
            <ReadMoreLink href={`/articles/${article.id}`}>阅读全文 →</ReadMoreLink>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </PageContainer>
  )
}

// Styled components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ArticleCard = styled.div`
  background: ${(props) => props.theme.boxBgColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`

const MetadataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const CategoryBadge = styled.span`
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.projectSkillColor};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`

const ArticleTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textColor};
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`

export const ArticleDate = styled.span`
  color: ${(props) => props.theme.textColor};
  opacity: 0.8;
  font-size: 0.9rem;
`

const ArticleExcerpt = styled.p`
  color: ${(props) => props.theme.textColor};
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  opacity: 0.9;
`

const ReadMoreLink = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;
  &:after {
    content: '';
    position: absolute;
    bottom: -5px; /* 距离文字底部5px */
    left: 50%; /* 初始位置居中 */
    width: 0; /* 初始宽度为0 */
    height: 2px;
    background-color: ${(props) => props.theme.accentColor}; /* 下划线颜色为强调色 */
    transition:
      width 0.3s ease,
      left 0.3s ease; /* 宽度和位置过渡动画 */
  }
  /* hover效果 */
  &:hover {
    transform: translateX(5px);
    border-left: transparent solid 3px;
    cursor: pointer;
    color: ${(props) => props.theme.accentColor}; /* 文字变为强调色 */
    /* 下划线从中间向两边展开 */
    &:after {
      width: 100%; /* 宽度变为100% */
      left: 0; /* 位置从左开始 */
    }
  }
`

export default Articles
