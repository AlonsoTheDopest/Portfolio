import CardGrid from '../CardGrid/index.js'
import SectionHeader from '../SectionHeader/index.js'

export default function Section( { information } ) {
  return (
    <>
      <SectionHeader title={ information.header.title } link={ information.header.link }/>
      <CardGrid projectInfo={ information }/>
    </>
  );
}
