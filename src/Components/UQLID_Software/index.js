import CardGrid from '../CardGrid';
import information from './information';
import { UQLID_POSTER_LINK } from '../../constants';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Section() {
  return (
    <>
      <h2><a href={ "https://" + UQLID_POSTER_LINK } target="_blank">Topology Optimization Software <FaExternalLinkAlt /></a></h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
