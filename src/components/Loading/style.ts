import styled, { keyframes } from 'styled-components'

// 旋转动画定义
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

// 加载容器
export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
  background-color: transparent;
`

// 圆形旋转动画
export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${(props) => props.theme.textColor};
  border-top-color: ${(props) => props.theme.accentColor};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
