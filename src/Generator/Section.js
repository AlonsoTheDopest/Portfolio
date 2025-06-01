import CardGrouping from '../CardGrouping';
import information from './information';

export default function Section() {
  return (
    <>
      <h2>Collegiate Wind Competition Generator</h2>
      <CardGrouping
        projectInfo={ information }
      />
    </>
  );
}
