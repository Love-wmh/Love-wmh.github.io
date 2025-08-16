import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { pageAnchors, type AnchorItem } from '@/store/anchors.ts'
import './index.css'
import React from 'react'

// 锚链接样式组件
const AnchorLink = styled.a`
  display: block;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`
const AnchorItemComponent: React.FC<{ anchor: AnchorItem }> = ({ anchor }) => {
  return (
    <div className="anchor-item">
      <AnchorLink href={`#${anchor.id}`}>{anchor.label}</AnchorLink>
      {anchor.children && (
        <div className="sub-anchors">
          {anchor.children.map((child) => (
            <AnchorItemComponent key={child.id} anchor={child} />
          ))}
        </div>
      )}
    </div>
  )
}
export default function Sidebar() {
  const location = useLocation()
  // 使用state存储当前锚点，确保路由变化时触发重渲染
  const [currentAnchors, setCurrentAnchors] = useState<AnchorItem[]>([])

  // 监听路径变化，重新计算当前锚点
  useEffect(() => {
    const anchors = pageAnchors[location.pathname as keyof typeof pageAnchors] || pageAnchors['/']
    setCurrentAnchors(anchors)
  }, [location.pathname])
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">本页导航</h3>
      <div className="anchor-list">
        {currentAnchors.map((anchor) => (
          <AnchorItemComponent key={anchor.id} anchor={anchor} />
        ))}
      </div>
    </div>
  )
}
