import styled from 'styled-components'
import { achievements } from '@/store/data'

// 主容器样式
const HomeContainer = styled.div`
  max-width: 800px;

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

// 时间线容器样式
const TimelineContainer = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 4px;
    background: ${(props) => props.theme.accentColor};
    border-radius: 2px;
  }
`

// 时间线项样式
const TimelineItem = styled.div`
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`

// 时间戳样式
const TimelineDate = styled.div`
  position: absolute;
  left: -1px;
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
`

// 内容卡片样式
const TimelineContent = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 3px solid ${(props) => props.theme.accentColor};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

// 成就标题样式
const AchievementTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1.3rem;
`

// 成就描述样式
const AchievementDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  line-height: 1.6;
`

const Home = () => {
  return (
    <HomeContainer>
      <h2>My Profile</h2>

      <p className="intro">记录我的技术学习历程和重要成就，见证从入门到熟练的成长轨迹。</p>

      <TimelineContainer>
        {achievements.map((achievement) => (
          <TimelineItem key={achievement.id}>
            <TimelineDate>{achievement.year}</TimelineDate>
            <TimelineContent>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDescription>{achievement.description}</AchievementDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
      <h2 id="contact">My Profile</h2>
    </HomeContainer>
  )
}

export default Home
