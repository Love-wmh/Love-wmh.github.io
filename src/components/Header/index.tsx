import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import dog from '@/assets/images/dog.svg'
import more from '@/assets/images/more.svg'
import { useTheme } from '@/contexts/ThemeContext'

// 组件容器样式
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.headerBgColor};
`
// 内部总容器样式
const Nav = styled.nav`
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
  }
  @media (min-width: 768px) {
    .more {
      display: none;
    }
  }
`
// 自定义导航链接样式
const StyledNavLink = styled(NavLink)`
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
const Logo = styled(Link)``

export const Header = () => {
  const { toggleTheme, themeType } = useTheme()
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src={dog} alt="这是一只可爱的小狗!" width={40} height={40} />
        </Logo>
        <span className="nav-title">Simplicity is prerequisite for reliability</span>
        <ul className="nav-ul">
          <li>
            <StyledNavLink to="/" end>
              首页
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/articles">文章</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">项目</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">关于</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="https://github.com/Love-wmh">GitHub</StyledNavLink>
          </li>
        </ul>
        <img src={more} alt="" className="more" width={30} height={30} />
        <button onClick={toggleTheme}>{themeType === 'light' ? '切换到暗色' : '切换到亮色'}</button>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
