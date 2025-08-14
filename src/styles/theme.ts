import type { DefaultTheme } from 'styled-components'

const commonProps = {
  modelMaxWidth: '768px'
}

export const lightTheme: DefaultTheme = {
  backgroundColor: '#f5f5f5',
  textColor: 'black',
  headerBgColor: '#eae5e5',
  accentColor: '#f36f06',
  scrollbarTrack: '#f1f1f1',
  scrollbarThumb: '#888888',
  boxBgColor: '#eae5e5',
  boxTextColor: '#130303',
  projectSkillColor: 'white',
  ...commonProps
}

export const darkTheme: DefaultTheme = {
  backgroundColor: '#1a1a1a',
  textColor: '#d7d7d8',
  headerBgColor: '#2c2c2c',
  accentColor: '#ffd700',
  scrollbarTrack: '#2c2c2c',
  scrollbarThumb: '#888888',
  boxBgColor: '#2b2b2e',
  boxTextColor: '#d3d3d3',
  projectSkillColor: 'black',
  ...commonProps
}

export type ThemeType = 'light' | 'dark'
