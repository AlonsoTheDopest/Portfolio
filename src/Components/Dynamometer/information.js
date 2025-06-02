import ProjectInfo from "../../ProjectInfo"
import schematic from "./images/schematic.jpeg"
import testBench from "./images/test-bench.jpeg"

const information = new ProjectInfo()

const whatImageAlt = "Circuit schematic of testing tool for Dynamometer"
const howImageAlt = "Physical testing tool for Dynamometer"
const resultsImageAlt = ""

const whatTexts = [ 
    "Develop a test bench to measure generator performance based on a dynamometer-based measurements"
]
const howTexts = [ 
    "Used <b>Arduino</b> for electrical structure",
    "Used current, torque, and RPM sensor for measurment readings",
    "Used LCD Screen and SD Card to read data"
]
const resultsTexts = [
    
]

information.setWhatInfo( schematic, whatImageAlt, whatTexts )
information.setHowInfo( testBench, howImageAlt, howTexts )
information.setResultsInfo( "", resultsImageAlt, resultsTexts )

export default information