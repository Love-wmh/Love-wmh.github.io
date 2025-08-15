import { projects } from './data'

// 锚点数据接口
export interface AnchorItem {
  id: string
  label: string
}
// 页面锚点数据
export const pageAnchors = {
  '/': [
    // Home页面锚点
    { id: 'my-profile', label: 'Profile' },
    { id: 'my-skills', label: 'Skills' },
    { id: 'my-timeline', label: 'Timeline' }
  ],
  '/projects': [
    // 根据projects数据动态生成的项目锚点
    ...projects.map((project) => ({
      id: project.linkID,
      label: project.linkLabel
    }))
  ],
  '/about': [
    // 关于页锚点
    { id: 'profile', label: '个人简介' },
    { id: 'skills', label: '技术栈' },
    { id: 'experience', label: '经历' }
  ],
  '/articles': [
    // 文章列表页锚点
    { id: 'latest', label: '最新文章' },
    { id: 'popular', label: '热门文章' },
    { id: 'archive', label: '文章归档' }
  ]
}
export interface MenuItemData {
  id: string
  label: string
  path: string
  children?: MenuItemData[]
}
// 示例菜单数据
export const menuData = [
  {
    id: '1',
    label: '首页',
    path: '/',
    children: [
      {
        id: '1-1',
        label: '个人简介',
        path: '/#profile'
      },
      {
        id: '1-2',
        label: '技能',
        path: '/#skills'
      },
      {
        id: '1-3',
        label: '时间线',
        path: '/#timeline'
      }
    ]
  },
  {
    id: '2',
    label: '文章',
    path: '/articles',
    children: [
      {
        id: '2-1',
        label: '最新文章',
        path: '/articles#latest'
      },
      {
        id: '2-2',
        label: '热门文章',
        path: '/articles#popular'
      }
    ]
  },
  {
    id: '3',
    label: '项目',
    path: '/projects',
    children: [
      {
        id: '2-1',
        label: '项目1',
        path: '/projects#project1'
      },
      {
        id: '2-2',
        label: '项目2',
        path: '/projects#project2'
      }
    ]
  }
]
