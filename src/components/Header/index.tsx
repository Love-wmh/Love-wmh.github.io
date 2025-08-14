import { HeaderContainer, Nav, StyledNavLink, Logo, ToggleThemeButton } from './style'
import dog from '@/assets/images/dog.svg'
import more from '@/assets/images/more.svg'
import { useTheme } from '@/contexts/ThemeContext'
import Drawer from '@/components/Drawer'
import { menuData } from '@/store/anchors'
import { useState } from 'react'

export const Header = () => {
  const { toggleTheme, themeType } = useTheme()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
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
          <li></li>
        </ul>
        {/* 移动端展开菜单按钮 */}
        <img
          src={more}
          alt="菜单"
          className="more"
          width={30}
          height={30}
          onClick={() => setIsDrawerOpen(true)}
        />
        <ToggleThemeButton onClick={toggleTheme} className="header-theme-btn">
          {themeType === 'dark' ? '开灯' : '关灯'}
        </ToggleThemeButton>
        {/* 抽屉组件 */}
        <Drawer
          isOpen={isDrawerOpen}
          direction="left"
          menuItems={menuData}
          onClose={() => setIsDrawerOpen(false)}
          onMenuItemClick={(id) => {
            console.log('点击了菜单项:', id)
            setIsDrawerOpen(false) // 点击后关闭抽屉
          }}
        />
      </Nav>
    </HeaderContainer>
  )
}

export default Header
