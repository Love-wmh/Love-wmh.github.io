// home页面的成就时间线
export const achievements = [
  {
    id: 1,
    year: '2023',
    title: '个人博客上线',
    description: '使用React和TypeScript搭建个人技术博客，记录学习心得和技术分享。'
  },
  {
    id: 2,
    year: '2022',
    title: '开源项目贡献',
    description: '为多个开源项目提交PR，包括前端组件库和工具函数库，获得社区认可。'
  },
  {
    id: 3,
    year: '2021',
    title: '技术栈升级',
    description: '深入学习React生态系统，掌握Next.js、GraphQL等技术，完成企业级应用开发。'
  },
  {
    id: 4,
    year: '2020',
    title: '前端开发入门',
    description: '系统学习HTML、CSS、JavaScript基础，完成第一个个人作品集网站。'
  }
]
// home页面skills
export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Styled Components',
  'Git',
  'Vite',
  'Redux',
  'Vue3',
  'Vue2',
  'Node.js',
  'Express',
  'MongoDB',
  'Docker',
  'Webpack',
  'React Native',
  'Electron',
  'ElementPlus',
  'SQLite',
  'Python3',
  'C++',
  'C',
  'ECharts',
  'PowerShell'
]
// 项目列表的数据接口定义
export interface Project {
  id: number
  name: string
  timeRange: string
  technologies: string[]
  description: string
  linkID: string
  linkLabel: string
}
// 项目列表数据
export const projects: Project[] = [
  {
    id: 1,
    name: '个人博客网站',
    timeRange: '2023.03 - 2023.06',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    description:
      '使用React和TypeScript构建的个人技术博客，支持主题切换、响应式布局和文章归档功能。实现了平滑滚动和动态加载效果，优化了SEO和性能。',
    linkID: 'project-1',
    linkLabel: '查看项目'
  },
  {
    id: 2,
    name: '在线代码编辑器',
    timeRange: '2022.11 - 2023.02',
    technologies: [
      'React',
      'Monaco Editor',
      'Firebase',
      'Material UI',
      'React',
      'Monaco Editor',
      'Firebase',
      'Material UI'
    ],
    description:
      '基于Monaco Editor的在线代码编辑工具，支持实时协作、代码分享和多种语言高亮。使用Firebase实现用户认证和数据存储，支持深色/浅色主题切换。',
    linkID: 'project-2',
    linkLabel: '查看项目'
  },
  {
    id: 3,
    name: '电商管理系统',
    timeRange: '2022.05 - 2022.10',
    technologies: ['Vue', 'Node.js', 'Express', 'MongoDB'],
    description:
      '全栈电商管理系统，包含商品管理、订单处理、用户权限控制等功能。前端使用Vue和Element UI，后端使用Node.js和Express构建RESTful API，数据库采用MongoDB。',
    linkID: 'project-3',
    linkLabel: '查看项目'
  }
]
