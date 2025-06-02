import CardGrid from '../CardGrid';
import information from './information';

export default function Section() {
  return (
    <>
      <h2>Collegiate Wind Competition Generator</h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
