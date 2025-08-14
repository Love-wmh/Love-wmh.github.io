import styled from 'styled-components'
import { type ThemeType } from '@/styles/theme'

interface ThemeToggleButtonProps {
  themeType: ThemeType
  toggleTheme: () => void
}

// 圆形按钮容器
const CircleButton = styled.button<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.isDark ? props.theme.headerBgColor : props.theme.accentColor)};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.5);
  }
`

// 太阳图标
const SunIcon = styled.svg<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.isDark ? '#ccc' : '#ffd700')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  transform: ${(props) => (props.isDark ? 'rotate(180deg) scale(0.5)' : 'rotate(0) scale(1)')};
  opacity: ${(props) => (props.isDark ? 0 : 1)};
`

// 月亮图标
const MoonIcon = styled.svg<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.isDark ? '#ffd700' : '#ccc')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  transform: ${(props) => (props.isDark ? 'rotate(0) scale(1)' : 'rotate(-180deg) scale(0.5)')};
  opacity: ${(props) => (props.isDark ? 1 : 0)};
`

export const ThemeToggleButton = ({ themeType, toggleTheme }: ThemeToggleButtonProps) => {
  const isDark = themeType === 'dark'

  return (
    <CircleButton
      isDark={isDark}
      onClick={toggleTheme}
      aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
    >
      <SunIcon isDark={isDark} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </SunIcon>

      <MoonIcon isDark={isDark} viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </MoonIcon>
    </CircleButton>
  )
}

export default ThemeToggleButton
