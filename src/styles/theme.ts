import type { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  backgroundColor: '#f5f5f5',
  textColor: 'black',
  headerBgColor: '#eae5e5',
  accentColor: '#f36f06',
  scrollbarTrack: '#f1f1f1',
  scrollbarThumb: '#888888'
}

export const darkTheme: DefaultTheme = {
  backgroundColor: '#1a1a1a',
  textColor: 'white',
  headerBgColor: '#2c2c2c',
  accentColor: '#ffd700',
  scrollbarTrack: '#2c2c2c',
  scrollbarThumb: '#888888'
}

export type ThemeType = 'light' | 'dark'
