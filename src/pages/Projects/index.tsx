import { projects } from '@/store/data'
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectCard,
  ProjectHeader,
  ProjectName,
  ProjectTime,
  TechnologiesContainer,
  TechTag,
  ProjectDescription
} from './style'

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} id={project.linkID}>
            <ProjectHeader>
              <ProjectName>{project.name}</ProjectName>
              <ProjectTime>{project.timeRange}</ProjectTime>
            </ProjectHeader>
            <TechnologiesContainer>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechnologiesContainer>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default Projects
