import CardGrid from '../CardGrid';
import information from './information';

export default function Section() {
  return (
    <>
      <h2>Search and Rescue Drone</h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
