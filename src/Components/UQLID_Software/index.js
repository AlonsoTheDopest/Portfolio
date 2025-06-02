import CardGrid from '../CardGrid';
import information from './information';
import { UQLID_POSTER_LINK } from '../../constants';

export default function Section() {
  return (
    <>
      <h2><a href={ "https://" + UQLID_POSTER_LINK }>Topology Optimization Software</a></h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
