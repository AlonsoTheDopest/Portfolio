import CardGrid from '../CardGrid';
import information from './information';

export default function Dynamometer() {
  return (
    <>
      <h2>Collegiate Wind Competition Dynamometer Test Bench</h2>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
