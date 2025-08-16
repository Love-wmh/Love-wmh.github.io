import styled, { keyframes } from 'styled-components'

// 主容器样式
export const HomeContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.textColor};
  }
  .intro {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: ${(props) => props.theme.textColor};
  }
`
// 时间线容器样式（调整垂直轴线到右侧）
export const TimelineContainer = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px; /* 原left:20px → 改为right:20px */
    width: 2px;
    background: ${(props) => props.theme.accentColor};
    border-radius: 2px;
  }
  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    &:before {
      display: none;
    }
  }
`

// 时间线项样式（移除右对齐文本，保持右侧内边距）
export const TimelineItem = styled.div`
  position: relative;
  padding-right: 60px; /* 保留右侧内边距，为时间线腾出空间 */
  margin-bottom: 3rem;
  /* 移除 text-align: right，恢复默认左对齐，使卡片内容从左侧开始 */
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    padding-right: 0;
  }
`

// 时间戳样式（调整到右侧）
export const TimelineDate = styled.div`
  position: absolute;
  right: -1px; /* 原left:-1px → 改为right:-1px */
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${(props) => props.theme.headerBgColor};
  border: 3px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 1;
  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    display: none;
  }
`

// 内容卡片样式（调整边框方向）
export const TimelineContent = styled.div`
  background: ${(props) => props.theme.boxBgColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 3px solid ${(props) => props.theme.accentColor}; /* 原border-left → 改为border-right */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`
// 成就标题样式
export const AchievementTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1.3rem;
`
// 成就描述样式
export const AchievementDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  line-height: 1.6;
`
// 技能方块渐入动画
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
// 技能模块容器
export const SkillsContainer = styled.section`
  margin: 4rem 0;
  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    margin: 2rem 0;
  }
`
// 技能标题
export const SkillTitle = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  font-family: 'Heebo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-left: #535bf2 solid 3px;
  color: ${(props) => props.theme.textColor};
  transition:
    color 0.3s ease,
    border-left 0.3s ease; /* 文字颜色过渡 */
  position: relative; /* 用于定位下划线 */
  display: inline-block; /* 使宽度适应内容 */

  /* 下划线伪元素 */
  &:after {
    content: '';
    position: absolute;
    bottom: -5px; /* 距离文字底部5px */
    left: 50%; /* 初始位置居中 */
    width: 0; /* 初始宽度为0 */
    height: 2px;
    background-color: ${(props) => props.theme.accentColor}; /* 下划线颜色为强调色 */
    transition:
      width 0.3s ease,
      left 0.3s ease; /* 宽度和位置过渡动画 */
  }
  /* hover效果 */
  &:hover {
    border-left: transparent solid 3px;
    color: ${(props) => props.theme.accentColor}; /* 文字变为强调色 */
    /* 下划线从中间向两边展开 */
    &:after {
      width: 100%; /* 宽度变为100% */
      left: 0; /* 位置从左开始 */
    }
  }
`
// 技能网格布局
export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap; // 允许换行
  gap: 1rem;
  justify-content: flex-start; // 从左侧开始排列
  @media (max-width: ${(props) => props.theme.modelMaxWidth}) {
    gap: 0.5rem;
    justify-content: space-between;
  }
`
// 技能方块
export const SkillItem = styled.div`
  background: ${(props) => props.theme.boxBgColor}; // 使用主题中的盒子背景色
  color: ${(props) => props.theme.boxTextColor}; // 使用主题中的盒子文本色
  padding: 1rem 1.5rem; // 适当增加水平内边距
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  animation: ${fadeInUp} 0.5s ease forwards;
  opacity: 0;
`
