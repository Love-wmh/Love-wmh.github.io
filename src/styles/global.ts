import { createGlobalStyle } from 'styled-components'
import './variables.css'

const GlobalStyle = createGlobalStyle`
  :root {
    --model-max-width: ${(props) => props.theme.modelMaxWidth};
    --bg-color: ${(props) => props.theme.backgroundColor};
    --text-color: ${(props) => props.theme.textColor};
    --header-bg: ${(props) => props.theme.headerBgColor};
    --accent-color: ${(props) => props.theme.accentColor};
    --scrollbar-track: ${(props) => props.theme.scrollbarTrack};
    --scrollbar-thumb: ${(props) => props.theme.scrollbarThumb};
    --box-bg-color: ${(props) => props.theme.boxBgColor};
    --box-text-color: ${(props) => props.theme.boxTextColor};
    --project-skill-color: ${(props) => props.theme.projectSkillColor};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    // 平滑滚动
    scroll-behavior: smooth;
    @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
      font-size: 12px;
    }
  }
  [id] {
    scroll-margin-top: 60px;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background-color: ${(props) => props.theme.backgroundColor};
  }
  /* 滚动条整体宽度和高度 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  /* 滚动条轨道 */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollbarTrack};
    border-radius: 0;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbarThumb};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #d1d1d1;
  }
`

export default GlobalStyle
