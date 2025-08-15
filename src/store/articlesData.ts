// 模拟文章数据
export type Article = {
  id: number
  title: string
  date: string
  excerpt: string
  category: string
}
export const articles: Article[] = [
  {
    id: 1,
    title: 'TypeScript三斜杠指令完全指南',
    date: '2023-11-15',
    excerpt: '深入探讨TypeScript中三斜杠指令的使用方法和最佳实践，帮助你更好地管理项目依赖...',
    category: '技术'
  },
  {
    id: 2,
    title: 'React组件设计模式实战',
    date: '2023-10-28',
    excerpt: '学习如何使用复合组件、渲染属性和自定义Hooks等模式构建可复用的React组件...',
    category: '前端'
  },
  {
    id: 3,
    title: 'CSS Grid布局完全掌握',
    date: '2023-10-10',
    excerpt: '从基础到高级，全面掌握CSS Grid布局，构建复杂而灵活的网页布局结构...',
    category: 'CSS'
  },
  {
    id: 4,
    title: 'Node.js性能优化技巧',
    date: '2023-09-22',
    excerpt: '探索提升Node.js应用性能的关键技术和最佳实践，包括内存管理和异步编程...',
    category: '后端'
  }
]
