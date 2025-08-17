import ProjectInfo from "../../ProjectInfo"
import shaft from './images/shaft.jpeg'
import assembly from './images/assembly.jpeg'

const information = new ProjectInfo()

const whatImages = [
    shaft
]
const howImages = [
    assembly
]
const resultsImages = []

const whatImageAlt = "CAD of permanent magnetic synchronous generator shaft"
const howImageAlt = "CAD assembly of the permanent magnetic syncrhonous generator"
const resultsImageAlt = ""

const whatTexts = [
    "Design a permanent magnetic synchronous generator with user-defined parameters to simplify the design process for the NAU CWC team",
    "Perfomed tests on existing generators to characterize performance, simulate through software, and modify before initiating the design process"
]
const howTexts = [
    "Simulated generators with ANSYS Maxwell and ANSYS MotorCAD", 
    "Tested with generator dynamometer", 
    "Designed shaft with SolidWorks and MATLAB"
]
const resultsTexts = []

information.setWhatInfo( whatImages, whatImageAlt, whatTexts )
information.setHowInfo( howImages, howImageAlt, howTexts )
information.setResultsInfo( resultsImages, resultsImageAlt, resultsTexts )

export default information