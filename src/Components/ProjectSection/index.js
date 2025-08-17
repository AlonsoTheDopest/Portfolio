import CardGrid from '../CardGrid/index.js'
import ProjectSectionHeader from '../ProjectSectionHeader/index.js'

export default function ProjectSection( { information } ) {
  return (
    <>
      <ProjectSectionHeader 
        title={ information.header.title } 
        link={ information.header.link } 
        icon={ information.header.icon }
        iconWidth={ information.header.iconWidth }
        iconHeight={ information.header.iconHeight }
      />
      <CardGrid 
        projectInfo={ information }
      />
    </>
  )
}
