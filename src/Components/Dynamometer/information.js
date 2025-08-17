import ProjectInfo from "../../ProjectInfo"
import schematic from "./images/schematic.png"
import testBench from "./images/test-bench.jpeg"
import testBenchInAction from "./images/test-bench-in-action.jpg"

const information = new ProjectInfo()

const title = "3-Phase PMSG Test Bench"
const link = "github.com/AlonsoTheDopest/CWC_GEN_Test_Bench/tree/main"

const whatImages = [
    schematic
]
const howImages = [
    testBench
]
const resultsImages = [
    testBenchInAction
]

const whatImageAlt = "Circuit schematic of test bench for Dynamometer"
const howImageAlt = "Physical testing bench for Dynamometer"
const resultsImageAlt = "Test bench in action with Dynamometer"

const whatTexts = [
    "Develop a test bench to measure generator performance from a dynamometer",
    "Implement the test bench with the dynamometer setup to ensure ease of use and trasportability for future PMSG testing"
]
const howTexts = [ 
    "Used Arduino for timing precision, data sampling, and data logging",
    "Utilized GitHub for version control and to ensure proper use of the test bench for future users",
    "Applied voltage divider, current sensor, infrared sensor, and load cell amplifier for voltage, current, rotational speed, and torque readings, respectively",
    "Integrated LCD Screen and SD Card to read and help process data",
    "Implemented Object Oriented Programming for reusability and maintainability"
]
const resultsTexts = [
    "Optimized voltage divider and current sensor measurement errors by 70%",
    "Soldered test bench circuit and voltage divider to have less than 1% voltage loss",
    "Programmed a tachometer to measure up to 5000 RPM with ±5% error <b>(work in progress to improve accuracy)<b>",
    "Achieved a high-voltage and high-current circuit of 48V and 24A for a 3-Phase PMSG input",
    "Supports a 2Ω minimum shunt resistance"
]

information.setHeaderInfo( title, link )
information.setWhatInfo( whatImages , whatImageAlt, whatTexts )
information.setHowInfo( howImages, howImageAlt, howTexts )
information.setResultsInfo( resultsImages, resultsImageAlt, resultsTexts )

export default information