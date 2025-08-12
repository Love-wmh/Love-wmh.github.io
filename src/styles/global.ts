import { createGlobalStyle } from 'styled-components'
import './variables.css'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: ${(props) => props.theme.backgroundColor};
    --text-color: ${(props) => props.theme.textColor};
    --header-bg: ${(props) => props.theme.headerBgColor};
    --accent-color: ${(props) => props.theme.accentColor};
    --scrollbar-track: ${(props) => props.theme.scrollbarTrack};
    --scrollbar-thumb: ${(props) => props.theme.scrollbarThumb};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background: #2c2c2c;
    border-radius: 0;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #d1d1d1;
  }
`

export default GlobalStyle
