// home页面的成就时间线
export const achievements = [
  {
    id: 1,
    year: '2024',
    title: '编程技术入门',
    description: '使用HTML，CSS，JavaScript设计简单dom，学习c语言，数据结构'
  },
  {
    id: 2,
    year: '2025',
    title: '技术栈补充',
    description: '原生仿写静态京东，学习Vue，搭建SPA'
  },
  {
    id: 3,
    year: '2025',
    title: '个人博客上线',
    description: '学习React基础，完成个人博客网站'
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
}
// 项目列表数据
export const projects: Project[] = [
  {
    id: 1,
    name: '个人博客网站',
    timeRange: '2025.07 - 2025.08',
    technologies: ['[ 维护中 ]', 'React', 'TypeScript', 'Styled Components', 'Vite'],
    description:
      '使用React和TypeScript构建的个人技术博客，支持主题切换、响应式布局和文章归档功能。使用了平滑滚动和组件按需加载，优化了SEO和性能。',
    linkID: 'project-1'
  },
  {
    id: 2,
    name: 'TasteSQLite',
    timeRange: '2025.07 - 2025.08',
    technologies: [
      '[ 开发中 ]',
      'Electron',
      'Vue3',
      'Element Plus',
      'better-sqlite3',
      'Vue Router',
      'Pinia'
    ],
    description:
      '基于Electron和Vue 3构建的SQLite数据库可视化跨平台客户端，支持数据库连接管理、表结构查看、数据查询和主题切换，UI界面美观，项目数据库结构清晰方便查看。使用better-sqlite3实现数据库交互，Element Plus提供UI组件，通过Electron IPC实现主进程与渲染进程通信，预支持MongoDB与MySQL。',
    linkID: 'project-2'
  },
  {
    id: 3,
    name: '科协迎新小游戏',
    timeRange: '2025.07 - 2025.08',
    technologies: [
      '[ 已上线 ]',
      '[ 团队开发 ]',
      'Vue3',
      'TypeScript',
      'Vite',
      'Element Plus',
      'Vue Router'
    ],
    description:
      '科协迎新小游戏是基于Vue3和TypeScript构建的互动式学习游戏，旨在通过游戏化方式帮助新生了解产品、前端、后端、游戏开发等技术方向。游戏包含剧情引导、知识问答、徽章收集等功能，用户通过完成不同方向的题目解锁新内容，最终达成学习目标。前端使用Vite构建工具和Element Plus组件库，采用响应式设计适配移动端体验，使用路由守卫和数据持久化实现关卡防护。',
    linkID: 'project-3'
  },
  {
    id: 4,
    name: '组织报名管理系统',
    timeRange: '2025.04 - 2025.05',
    technologies: ['Vue3', 'Vite', 'Element Plus', 'Vue Router'],
    description:
      '该管理系统SPA基于Vue3开发，UI界面十分美观，拥有学生志愿填报和管理员后台功能。填报页面充分使用ElementPlus组件，根据数据进行选项渲染具有高度定制性，配置全面的表单校验引导用户完成并且降低请求压力。管理员端使用Echarts进行数据可视化展示，提供表格清晰查看志愿信息。',
    linkID: 'project-4'
  },
  {
    id: 5,
    name: '静态页面仿写',
    timeRange: '2025.01 - 2025.02',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    description: '原生仿写京东及其豆瓣静态页面，还原率95%。',
    linkID: 'project-5'
  },
  {
    id: 6,
    name: '员工管理控制台应用',
    timeRange: '2025.05 - 2025.06',
    technologies: ['C语言', '单向链表', '文件读写'],
    description:
      '原生C语言实现基于链表的高效增删改查，数据量较小使用全量读取数据到内存的方案，实现高效查找，数据量较大时使用基于文件的增删改查方案避免浪费性能，支持多样化查询条件高效管理员工信息。',
    linkID: 'project-6'
  },
  {
    id: 7,
    name: '五子棋游戏',
    timeRange: '2024.11 - 2024.12',
    technologies: ['C语言', '文件读写', '指针'],
    description:
      '纯C语言实现登录注册系统，双人对战系统，人机对战系统，有高效的本地登录注册校验系统，基于简单算法的人机对战，EasyX图形化界面，可控制音乐系统。',
    linkID: 'project-7'
  }
]
