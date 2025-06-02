// Imports

    // React Bootstrap
    import Card from 'react-bootstrap/Card'
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';

    // CSS
    import "./index.css"

    // Other
    import parse from 'html-react-parser'

// Helper functions

    // Checks if image field is empty
    function isImageEmpty( image ) {
        return image === null
    }

    // Checks if there are no texts in texts array 
    function areTextsEmpty( texts ) {
        return texts.length === 0
    }

    // Turns all texts in text array as React card text component
    function textsToReactCardTexts( texts ) {
        return texts.map( ( text, index ) => {
            return (
                <li> <Card.Text key={ index }> { parse( text ) } </Card.Text> </li>
            )
        })
    }

    // React Component that makes a card for a specific topic of a project
    function CardInfo( { image, imageAlt, title, texts } ) {
        return (
            <Col sm={ 4 }>
                <Card className="project-info">
                    <Card.Img variant="top" src={ image } alt={ imageAlt } />
                    <Card.Body>
                        <Card.Title as="h3"> { title } </Card.Title>
                        <ul>
                            { textsToReactCardTexts( texts ) }
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        )
    }  


// 
export default function CardGrid( { projectInfo } ) {
    const cards = Object.entries( projectInfo ).map( ( field, index ) => {
        const projectPartInfo = field[ 1 ]
        if ( !( isImageEmpty( projectPartInfo.image ) || areTextsEmpty( projectPartInfo.texts ) ) ) {
            return ( 
                <CardInfo 
                    key={ index }
                    image={ projectPartInfo.image }
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
  