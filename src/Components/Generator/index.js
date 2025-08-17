import CardGrid from '../CardGrid';
import information from './information';
import { ME_CAPSTONE_LINK } from '../../constants.js';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Section() {
  return (
    <>
      <h2><a href={ "https://" + ME_CAPSTONE_LINK } target="_blank">3-Phase Permanent Magnetic Synchronous Generator (PMSG) <FaExternalLinkAlt /></a></h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
