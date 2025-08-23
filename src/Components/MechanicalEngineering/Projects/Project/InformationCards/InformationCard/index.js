    // React Bootstrap
    import Card from 'react-bootstrap/Card'
    import Carousel from 'react-bootstrap/Carousel';
    import Col from 'react-bootstrap/Col';

   // Other
    import parse from 'html-react-parser'

    // Turns all texts in text array as React card text component
    function textsToReactCardTexts( texts ) {
        return texts.map( ( text, index ) => {
            return (
                <li> 
                    <Card.Text key={ index }>
                        { parse( text ) }
                    </Card.Text> 
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
export default function InformationCard( { images, imageAlt, title, texts } ) {
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
                    <Card.Title as="h3"> 
                        { title } 
                    </Card.Title>
                    <ul>
                        { textsHtml }
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    ) 
    
}  