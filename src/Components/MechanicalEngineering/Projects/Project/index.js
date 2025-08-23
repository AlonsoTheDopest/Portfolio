import CardGrid from './CardGrid/index.js'
import Header from './Header/index.js'

export default function Project( { information } ) {
  return (
    <>
      <Header 
        title={ information.header.title } 
        link={ information.header.link } 
        icon={ information.header.icon }
        iconWidth={ information.header.iconWidth }
        iconHeight={ information.header.iconHeight }
      />
      <CardGrid 
        projectInfo={ information }
      />
    </>
  )
}
