// Imports

  // Projects
  import Generator from "./Generator/Section"
  import Dynamometer from "./Dynamometer/Section"
  import UqlidSoftware from "./UQLID_Software/Section"
  import Card from 'react-bootstrap/Card'

  // CSS
  import "./Projects.css"

  // React Bootstrap
  import Stack from 'react-bootstrap/Stack'

export default function Projects() {
  return (
      <Stack id="projects">
        <Card body className="project"><Generator /></Card>
        <Card body className="project"><Dynamometer /></Card>
        <Card body className="project"><UqlidSoftware /></Card>
      </Stack>
  )
}
