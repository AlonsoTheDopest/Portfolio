import ProjectInfo from "../ProjectInfo"
import shaft from './images/shaft.jpeg'
import assembly from './images/assembly.jpeg'

const information = new ProjectInfo()

const whatImageAlt = "CAD of permanent magnetic synchronous generator shaft"
const howImageAlt = "CAD assembly of the permanent magnetic syncrhonous generator"
const resultsImageAlt = ""

const whatTexts = [
    "Design a permanent magnetic synchronous generator to simplify the design process for the NAU CWC team",
    "Perfomed tests on existing generators to characterize performance, simulate through software, and modify before initiating the design process"
]
const howTexts = [
    "Simulated generators with <b>ANSYS Maxwell</b> and <b>ANSYS MotorCAD</b>", 
    "Tested with generator dynamometer", 
    "Designed shaft with <b>SolidWorks</b> and <b>MATLAB</b>"
]
const resultsTexts = []

information.setWhatInfo( shaft, whatImageAlt, whatTexts )
information.setHowInfo( assembly, howImageAlt, howTexts )
information.setResultsInfo( "", resultsImageAlt, resultsTexts )

export default information