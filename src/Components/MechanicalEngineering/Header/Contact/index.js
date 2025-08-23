import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EMAIL, PHONE_NUM, LINKED_IN, GIT_HUB, ICON_SIZE, ICON_COLOR } from "./information"

export default function Contact() {
    return (
        <Container>
            <Row>
                <Col> <a href={ "mailto:" +  EMAIL }> <MdEmail size={ ICON_SIZE } color={ ICON_COLOR } className="icon"/>{ EMAIL }</a> </Col>
            </Row>
            <Row>
                <Col> <a href={ "tel:" + PHONE_NUM }> <FaPhoneAlt size={ ICON_SIZE } color={ ICON_COLOR } className="icon"/>{ PHONE_NUM }</a> </Col>
            </Row>
            <Row>
                <Col> <a href={ "https://" + LINKED_IN } target="_blank" rel="noreferrer"> <FaLinkedin size={ ICON_SIZE } color={ ICON_COLOR } className="icon"/>{ LINKED_IN }</a> </Col>
            </Row>
            <Row>
                <Col> <a href={ "https://" + GIT_HUB } target="_blank" rel="noreferrer"> <FaGithub size={ ICON_SIZE } color={ ICON_COLOR } className="icon"/>{ GIT_HUB }</a> </Col>
            </Row>
        </Container>
    );
}
  