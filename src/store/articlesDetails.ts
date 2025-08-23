import { articles } from './articlesData'
export interface ArticlesDetail {
  id: string
  title: string
  category: string
  date: string
  tags: string[]
  content: string
}

// 文章详情内容数据源 (实际项目中可从文件或API获取)
const articleContents: { [key: string]: string } = {
  '1': ``,
  '2': '',
  '3': '',
  '4': ''
}
// 添加索引签名以支持字符串索引
const articleTags: { [key: string]: string[] } = {
  '1': ['TypeScript', '类型系统', '三斜杠指令'],
  '2': ['React', '组件设计', '设计模式'],
  '3': ['CSS', 'Grid', '布局'],
  '4': ['Node.js', '性能优化', '后端']
}

// 从基础文章数据生成详情数据
export const articlesData: ArticlesDetail[] = articles.map((article) => ({
  // 基础字段直接从articles继承
  id: article.id.toString(), // 转换id为字符串类型
  title: article.title,
  date: article.date,
  category: article.category,

  tags: [article.category, ...(articleTags[article.id.toString()] || [])],
  // 文章内容从内容数据源获取
  content: articleContents[article.id.toString()] || ''
}))

// 获取所有文章分类
export const getCategories = () => {
  const categories = new Set(articlesData.map((article) => article.category))
  return Array.from(categories)
}

// 根据ID获取文章
export const getArticleById = (id: string) => {
  return articlesData.find((article) => article.id === id)
}
