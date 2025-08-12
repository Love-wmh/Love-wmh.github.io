import 'styled-components'
import type { DefaultTheme } from 'styled-components'

// 扩展 DefaultTheme 接口，添加自定义主题属性
declare module 'styled-components' {
  export interface DefaultTheme {
    // 主背景颜色
    backgroundColor: string
    // 主字体颜色
    textColor: string
    // 头背景颜色
    headerBgColor: string
    // 强调色
    accentColor: string
    // 滚动条轨道颜色
    scrollbarTrack: string
    // 滚动条滑块颜色
    scrollbarThumb: string
  }
}
