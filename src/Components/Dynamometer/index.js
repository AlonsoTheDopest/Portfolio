import CardGrid from '../CardGrid';
import information from './information';
import { ME_CAPSTONE_LINK } from '../../constants.js';

export default function Dynamometer() {
  return (
    <>
      <h2><a href={ "https://" + ME_CAPSTONE_LINK } target="_blank">Collegiate Wind Competition Dynamometer Test Bench</a></h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
