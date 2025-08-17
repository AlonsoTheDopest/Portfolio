import ProjectInfo from "../../ProjectInfo"
import cantBeam from "./images/cantilever-beam.png"
import optCantBeam from "./images/optimized-cantilever-beam.png"
import softwareScreen from "./images/software-screen.png"

const information = new ProjectInfo()

const whatImages = [
    cantBeam
]
const howImages = [
    optCantBeam
]
const resultsImages = [
    softwareScreen
]

const whatImageAlt = "Cantilever beam subjected to a force at the end of it"
const howImageAlt = "Optimized cantilever beam based on the force at the end of it"
const resultsImageAlt = "Screenshot of software that includes user-defined parameters and an optimized cantilever beam"

const whatTexts = [ 
    "Develop a software that optimizes engineering system designs"
]

const howTexts = [ 
    "Utilized finite element analysis for optimizing parts",
    "Established Julia as the programming language",
    "Used GenieBuilder to make the optimization process as an app"
]

const resultsTexts = [
    "Allows up to 90% weight reduction without compromising performance",
    "Optimized part generation duration is 1 hour or less"
]

information.setWhatInfo( whatImages, whatImageAlt, whatTexts )
information.setHowInfo( howImages, howImageAlt, howTexts )
information.setResultsInfo( resultsImages, resultsImageAlt, resultsTexts )

export default information