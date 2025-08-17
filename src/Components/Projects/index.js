// Imports

  // Projects
  import Generator from "../Generator/information"
  import Dynamometer from "../Dynamometer/information"
  import UqlidSoftware from "../UQLID_Software/information"
  import Drone from "../Drone/information"
  
  // Components
  import Section from "../Section"

  // CSS
  import "./index.css"

  // React Bootstrap
  import Stack from 'react-bootstrap/Stack'
  import Card from 'react-bootstrap/Card'

export default function Projects() {
  return (
      <Stack id="projects">
        <Card body className="project"><Section information={ Generator } /></Card>
        <Card body className="project"><Section information={ Dynamometer } /></Card>
        <Card body className="project"><Section information={ UqlidSoftware } /></Card>
        <Card body className="project"><Section information={ Drone } /></Card>
      </Stack>
  )
}
