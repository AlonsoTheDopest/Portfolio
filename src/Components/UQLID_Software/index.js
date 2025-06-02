import CardGrid from '../CardGrid';
import information from './information';

export default function Section() {
  return (
    <>
      <h2>Topology Optimization Software</h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
