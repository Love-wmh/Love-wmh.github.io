import { achievements, skills } from '@/store/data'
import {
  SkillsContainer,
  SkillTitle,
  SkillsGrid,
  SkillItem,
  TimelineContainer,
  TimelineItem,
  TimelineDate,
  TimelineContent,
  AchievementTitle,
  AchievementDescription,
  HomeContainer
} from './style.ts'

const Home = () => {
  return (
    <HomeContainer>
      {/* 个人简介 */}
      <SkillTitle id="my-profile">My Profile</SkillTitle>
      <p className="intro">记录我的技术学习历程和重要成就，见证从入门到熟练的成长轨迹。</p>
      {/* skills */}
      <SkillsContainer>
        <SkillTitle id="my-skills">My Skills</SkillTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem
              key={skill}
              // 每个技能方块延迟 100ms 依次动画
              style={{ animationDelay: `${100 * index}ms` }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillsGrid>
      </SkillsContainer>
      {/* 技术时间线 */}
      <SkillTitle id="my-timeline">My Timeline</SkillTitle>
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
    </HomeContainer>
  )
}

export default Home
