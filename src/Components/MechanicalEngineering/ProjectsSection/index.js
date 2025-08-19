// Imports

  // Projects
  import Generator from "../Projects/Generator/information"
  import Dynamometer from "../Projects/Dynamometer/information"
  import UqlidSoftware from "../Projects/UQLID_Software/information"
  import Drone from "../Projects/Drone/information"
  
  // Components
  import ProjectSection from "../ProjectSection"

  // CSS
  import "./index.css"

  // React Bootstrap
  import Stack from 'react-bootstrap/Stack'
  import Card from 'react-bootstrap/Card'

export default function ProjectsSection() {
  return (
      <Stack id="projects">

        <Card body className="project">
          <ProjectSection information={ Generator } />
        </Card>

        <Card body className="project">
          <ProjectSection information={ Dynamometer } />
        </Card>

        <Card body className="project">
          <ProjectSection information={ UqlidSoftware } />
        </Card>

        <Card body className="project">
          <ProjectSection information={ Drone } />
        </Card>
        
      </Stack>
  )
}
