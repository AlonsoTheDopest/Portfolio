// Imports

    // React Bootstrap
    import Row from 'react-bootstrap/Row';

    // Components
    import InformationCard from './InformationCard';

    // CSS
    import "./index.css"


// Helper functions

    // Checks if image field is empty
    function areImagesEmpty( images ) {
        return images.length === 0
    }

    // Checks if there are no texts in texts array 
    function areTextsEmpty( texts ) {
        return texts.length === 0
    }


// 
export default function InformationCards( { projectInfo } ) {
    let objectEntries = Object.entries( projectInfo )
    objectEntries.shift() // Remove first entry of projectInfo
    const cards = objectEntries.map( ( field, index ) => {
        const projectPartInfo = field[ 1 ]
        if ( !( areImagesEmpty( projectPartInfo.images ) && areTextsEmpty( projectPartInfo.texts ) ) ) {
            return ( 
                <InformationCard 
                    key={ index }
                    images={ projectPartInfo.images }
                    imageAlt={ projectPartInfo.imageAlt }
                    title={ projectPartInfo.title }
                    texts={ projectPartInfo.texts }
                />
            )
        }
        return <></>
    })
    return <Row className="justify-content-md-center">{ cards }</Row>
}
  