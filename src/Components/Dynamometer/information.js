import ProjectInfo from "../../ProjectInfo"
import schematic from "./images/schematic.png"
import testBench from "./images/test-bench.jpeg"
import testBenchInAction from "./images/test-bench-in-action.jpg"

const information = new ProjectInfo()

const whatImageAlt = "Circuit schematic of test bench for Dynamometer"
const howImageAlt = "Physical testing bench for Dynamometer"
const resultsImageAlt = "Test bench in action with Dynamometer"

const whatTexts = [ 
    "Develop a test bench to measure generator performance based on a dynamometer-based measurements",
    "Implement the test bench to ensure ease of use and trasportability for future PMSG testing"
]
const howTexts = [ 
    "Used Arduino for timing precision and data logging",
    "Utilized GitHub for version control and to ensure future users can properly use the test bench",
    "Applied voltage divider, current sensor, infrared sensor, and load cell amplifier for voltage, current, rotational speed, and torque readings, respectively",
    "Integrated LCD Screen and SD Card to read and process data",
    "Implemented Object Oriented Programming for reusability and maintainability"
]
const resultsTexts = [
    "Optimized voltage divider and current sensor measurement errors by 70%",
    "Soldered test bench circuit and voltage divider to have less than 1% voltage loss",
    "Programmed a tachometer to measure up to 5000 RPM with ±5% error <b>(work in progress to improve accuracy)<b>",
    "Achieved a high-voltage and high-current circuit of 48V and 24A 3-Phase PMSG input",
    "Integrated a programmable load input that supports a 2Ω minimum shunt resistance"
]

information.setWhatInfo( schematic, whatImageAlt, whatTexts )
information.setHowInfo( testBench, howImageAlt, howTexts )
information.setResultsInfo( testBenchInAction, resultsImageAlt, resultsTexts )

export default information