import ProjectInfo from "../../ProjectInfo"
import subSystemConcepts from "./images/sub-system-concepts.png"
import concept from "./images/concept.png"
import droneCad1 from "./images/drone-cad1.png"
import droneCad2 from "./images/drone-cad2.png"

const information = new ProjectInfo()

const whatImages = [
    subSystemConcepts
]
const howImages = [
    concept
]
const resultsImages = [
    droneCad1,
    droneCad2
]


const whatImageAlt = ""
const howImageAlt = ""
const resultsImageAlt = ""

const whatTexts = [
    "Design a search and rescue drone made for mountainous and woodland climates that is less costly compared to competitors"
]
const howTexts = [
    "Traded flight duration over accurate results of finding survivors",
    "Ensured the drone is low cost by using less material, power for stability, and constant use of low throttle"
]
const resultsTexts = [
    "Reduced production cost by 70%",
    "Optimized drone speed by 13%",
    "Achieved a transmission distance increase of 29%"
]

information.setWhatInfo( whatImages , whatImageAlt, whatTexts )
information.setHowInfo( howImages, howImageAlt, howTexts )
information.setResultsInfo( resultsImages, resultsImageAlt, resultsTexts )

export default information