import CardGrid from '../CardGrid';
import information from './information';
import SectionHeader from '../SectionHeader/index.js';

export default function Section() {
  return (
    <>
      <SectionHeader title={ information.header.title } link={ information.header.link }/>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
