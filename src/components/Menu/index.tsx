import React, { useState } from 'react'
import './style.css'
import { StyledNavLink } from '@/components/Header/style'
import { type MenuItemData } from '@/store/anchors'

// 菜单项组件属性接口
interface MenuItemProps {
  item: MenuItemData
  level?: number
  onItemClick?: (id: string) => void
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 0, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = !!item.children?.length
  const handleClick = () => {
    // 如果有子菜单，切换展开状态
    if (hasChildren) {
      setIsOpen(!isOpen)
    }
    // 调用点击回调
    if (onItemClick) {
      onItemClick(item.id)
    }
  }
  // 添加箭头点击事件处理函数
  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 阻止事件冒泡到父元素
    setIsOpen(!isOpen) // 仅切换展开状态
  }
  return (
    <div className={`menu-item level-${level}`} onClick={handleClick}>
      <div className="menu-item-label">
        <StyledNavLink to={item.path} className="menu-link">
          {item.label}
        </StyledNavLink>
        {hasChildren && (
          <span
            className={`submenu-arrow ${isOpen ? 'open' : ''}`}
            onClick={handleArrowClick}
          ></span>
        )}
      </div>
      {hasChildren && (
        <div className={`submenu-items ${isOpen ? 'open' : ''}`}>
          {item.children?.map((child) => (
            <MenuItem key={child.id} item={child} level={level + 1} onItemClick={onItemClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuItem
