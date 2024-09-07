import { ProjectType } from '../../../types'

import './Project.css'

interface Props {
  project: ProjectType
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <>
      <article className='project'>
        <div className='title-subtitle'>
          <h2>{project.name}</h2>
          <h4>{project.subtitle}</h4>
        </div>
        <div className='description-preview'>
          <p>{project.description}</p>
          {project.image !== '' &&
            <img
              src={project.image}
              alt={project.name.concat(project.subtitle)}
            />}
        </div>
        <div className='project-links'>
          <a href={project.github}>GitHub</a>
          {project.demo !== '' && <a href={project.demo}>Web Site</a>}
        </div>
      </article>
    </>
  )
}