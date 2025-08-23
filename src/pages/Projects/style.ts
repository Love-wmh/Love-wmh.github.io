import styled from 'styled-components'

// 项目列表容器
export const ProjectsContainer = styled.div`
  padding: 0 0;
`

// 页面标题
export const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textColor};
`

// 项目卡片网格布局
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

// 项目卡片容器
export const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.boxBgColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`

// 项目头部（名称和时间）
export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 将flex-start改为center实现垂直居中 */
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
`

// 项目名称
export const ProjectName = styled.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${(props) => props.theme.accentColor};
`

// 项目时间区间
export const ProjectTime = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textColor};
  opacity: 0.8;
  white-space: nowrap;
`

// 技术栈容器
export const TechnologiesContainer = styled.div`
  margin-bottom: 1rem;
`

// 技术栈标签
export const TechTag = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.projectSkillColor};
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

// 项目描述
export const ProjectDescription = styled.p`
  color: ${(props) => props.theme.boxTextColor};
  line-height: 1.6;
  margin: 0;
`
