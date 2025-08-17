// Imports

  // Projects
  import Generator from "../Generator"
  import Dynamometer from "../Dynamometer"
  import UqlidSoftware from "../UQLID_Software"
  import Drone from "../Drone"
  import Card from 'react-bootstrap/Card'

  // CSS
  import "./index.css"

  // React Bootstrap
  import Stack from 'react-bootstrap/Stack'

export default function Projects() {
  return (
      <Stack id="projects">
        <Card body className="project"><Generator /></Card>
        <Card body className="project"><Dynamometer /></Card>
        <Card body className="project"><UqlidSoftware /></Card>
        <Card body className="project"><Drone /></Card>
      </Stack>
  )
}
