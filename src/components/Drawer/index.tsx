import React from 'react'
import MenuItem from '@/components/Menu'
import { type MenuItemData } from '@/store/anchors.ts'
import './style.css'
import { ToggleThemeButton } from '@/components/Header/style.ts'
import { useTheme } from '@/contexts/ThemeContext.tsx'

// 抽屉组件属性接口
interface DrawerProps {
  // 抽屉是否打开
  isOpen: boolean
  // 抽屉滑出方向
  direction: 'left' | 'right'
  // 菜单数据
  menuItems: MenuItemData[]
  // 关闭抽屉的回调
  onClose: () => void
  // 菜单项点击回调
  onMenuItemClick?: (id: string) => void
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  direction,
  menuItems,
  onClose,
  onMenuItemClick
}) => {
  // 点击遮罩层关闭抽屉
  const handleBackdropClick = () => {
    onClose()
  }

  // 阻止抽屉内部点击事件冒泡到遮罩层
  const handleDrawerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const { toggleTheme, themeType } = useTheme()
  return (
    <>
      {/* 遮罩层 */}
      <div className={`drawer-backdrop ${isOpen ? 'show' : ''}`} onClick={handleBackdropClick} />

      {/* 抽屉容器 */}
      <div
        className={`drawer-container drawer-${direction} ${isOpen ? 'drawer-open' : ''}`}
        onClick={handleDrawerClick}
      >
        <ToggleThemeButton onClick={toggleTheme} style={{ marginLeft: 20, marginTop: 20 }}>
          {themeType === 'dark' ? '开灯' : '关灯'}
        </ToggleThemeButton>
        <div className="menu-items">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} onItemClick={onMenuItemClick} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Drawer
