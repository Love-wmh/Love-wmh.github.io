import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type DefaultTheme, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, type ThemeType } from '@/styles/theme.ts'

// 主题上下文的类型接口
interface ThemeContextType {
  theme: DefaultTheme
  themeType: ThemeType
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('light')

  // 初始化时从localStorage读取主题偏好
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null
    if (savedTheme) {
      setThemeType(savedTheme)
    }
  }, [])

  // 切换主题并保存到localStorage
  const toggleTheme = () => {
    const newTheme = themeType === 'light' ? 'dark' : 'light'
    setThemeType(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // 根据当前主题类型选择对应的主题配置
  const theme = themeType === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProviderWrapper')
  }
  return context
}
