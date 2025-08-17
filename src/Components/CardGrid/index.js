// Imports

    // React Bootstrap
    import Card from 'react-bootstrap/Card'
    import Carousel from 'react-bootstrap/Carousel';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';

    // CSS
    import "./index.css"

    // Other
    import parse from 'html-react-parser'

// Helper functions

    // Checks if image field is empty
    function areImagesEmpty( images ) {
        return images.length === 0
    }

    // Checks if there are no texts in texts array 
    function areTextsEmpty( texts ) {
        return texts.length === 0
    }

    // Turns all texts in text array as React card text component
    function textsToReactCardTexts( texts ) {
        return texts.map( ( text, index ) => {
            return (
                <li> 
                    <Card.Text key={ index }> { parse( text ) } </Card.Text> 
                </li>
            )
        })
    }

    function imagesToReactCarouselItems( images, imageAlt ) {
        return images.map( ( image, index ) => {
            return (
                <Carousel.Item key={ index }>
                    <Card.Img variant="top" src={ image } alt={ imageAlt } />
                </Carousel.Item>
            )
        })
    }

    // React Component that makes a card for a specific topic of a project
    function CardInfo( { images, imageAlt, title, texts } ) {
        let imagesHtml = <></>
        let textsHtml = textsToReactCardTexts( texts )

        if ( images.length === 1 ) {
            imagesHtml = <Card.Img variant="top" src={ images } alt={ imageAlt }/>
        }

        else if( images.length > 1 ) {
            imagesHtml = (
                <Carousel interval={ null }>
                    { imagesToReactCarouselItems( images, imageAlt ) }
                </Carousel>
            )
        }

        return (
            <Col sm={ 4 }>
                <Card className="project-info">
                    { imagesHtml }
                    <Card.Body>
                        <Card.Title as="h3"> { title } </Card.Title>
                        <ul>
                            { textsHtml }
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        ) 
        
    }  


// 
export default function CardGrid( { projectInfo } ) {
    let objectEntries = Object.entries( projectInfo )
    objectEntries.shift() // Remove first entry of projectInfo
    const cards = objectEntries.map( ( field, index ) => {
        const projectPartInfo = field[ 1 ]
        if ( !( areImagesEmpty( projectPartInfo.images ) && areTextsEmpty( projectPartInfo.texts ) ) ) {
            return ( 
                <CardInfo 
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
  