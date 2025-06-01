import ProjectInfo from "../ProjectInfo"
import cantBeam from "./images/cantilever-beam.png"
import optCantBeam from "./images/optimized-cantilever-beam.png"
import softwareScreen from "./images/software-screen.png"

const information = new ProjectInfo()

const whatImageAlt = "Cantilever beam subjected to a force at the end of it"
const howImageAlt = "Optimized cantilever beam based on the force at the end of it"
const resultsImageAlt = "Screenshot of software that includes user-defined parameters and an optimized cantilever beam"

const whatTexts = [ 
    "Develop a software that optimizes engineering system designs"
]

const howTexts = [ 
    "Used <b>topology optimization</b> for optimizing parts",
    "Established <b>Julia</b> as the programming language",
    "Used <b>GenieBuilder</b> to make the optimization process as an app"
]

const resultsTexts = [
    "The software allows up to 90% weight reduction without compromising performance",
]

information.setWhatInfo( cantBeam, whatImageAlt, whatTexts )
information.setHowInfo( optCantBeam, howImageAlt, howTexts )
information.setResultsInfo( softwareScreen, resultsImageAlt, resultsTexts )

export default information