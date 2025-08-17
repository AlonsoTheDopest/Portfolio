import CardGrid from '../CardGrid';
import information from './information';
import { TEST_BENCH_LINK } from '../../constants.js';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Section() {
  return (
    <>
      <h2><a href={ "https://" + TEST_BENCH_LINK } target="_blank">3-Phase PMSG Test Bench <FaExternalLinkAlt /></a></h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
