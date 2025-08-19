// Imports

  // Projects
  import Generator from "./Generator/information"
  import Dynamometer from "./Dynamometer/information"
  import UqlidSoftware from "./UQLID_Software/information"
  import Drone from "./Drone/information"
  
  // Components
  import Project from "./Project"

  // CSS
  import "./index.css"

  // React Bootstrap
  import Stack from 'react-bootstrap/Stack'
  import Card from 'react-bootstrap/Card'

export default function Projects() {
  return (
      <Stack id="projects">

        <Card body className="project">
          <Project information={ Generator } />
        </Card>

        <Card body className="project">
          <Project information={ Dynamometer } />
        </Card>

        <Card body className="project">
          <Project information={ UqlidSoftware } />
        </Card>

        <Card body className="project">
          <Project information={ Drone } />
        </Card>
        
      </Stack>
  )
}
