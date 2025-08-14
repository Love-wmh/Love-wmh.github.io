import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

// 组件容器样式
export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.headerBgColor};
`
// 内部总容器样式
export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2rem;

  .nav-ul {
    margin-left: auto;
    display: flex;
    list-style: none;
    padding: 0;
  }
  .nav-title {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
  }
  @media (max-width: 1000px) {
    .nav-title {
      display: none;
    }
  }
  .more {
    filter: invert(100%);
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .more {
      display: none;
    }
  }
  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    .nav-ul {
      display: none;
    }
  }
`
// 自定义导航链接样式
export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &.active {
    color: ${(props) => props.theme.accentColor};
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.accentColor};
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
    transform: translateY(-2px);
  }
`
export const Logo = styled(Link)``
export const ToggleThemeButton = styled.button`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: transparent;
  outline: none;
  border: none;

  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    &.header-theme-btn {
      display: none;
    }
  }
  &.active {
    color: ${(props) => props.theme.accentColor};
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.accentColor};
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`
