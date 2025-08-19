import Contact from '../Contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import abgPicture from "../../../images/alonso-garcia.jpg"
import Image from 'react-bootstrap/Image';

import "./index.css"

export default function Header() {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col md="auto"> <Image src={ abgPicture } alt={ "Alonso Garcia" } roundedCircle/> </Col>
                    <Col md="auto">
                        <h1 id="title"><strong>Alonso Garcia</strong></h1>
                        <p id="subtitle">Mechanical Engineering and Computer Science Student at Northern Arizona University</p>
                    </Col>
                    <Col md="auto"> <Contact /> </Col>
                </Row>
            </Container>
        </header>
    )
}
  