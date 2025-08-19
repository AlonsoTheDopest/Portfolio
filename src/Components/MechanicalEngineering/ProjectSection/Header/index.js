import { FaExternalLinkAlt } from "react-icons/fa"
import Image from 'react-bootstrap/Image'

import "./index.css"

export default function Header( { title, link, icon, iconWidth, iconHeight } ) {
    let imageTag = <></>
    let linkTag = (
        <>
            { title }
        </>
    )

    if ( icon !== "" ) {
        imageTag = ( 
            <Image 
                src={ icon } 
                rounded 
                width={ iconWidth } 
                height={ iconHeight }
            />
        )
    }

    if ( link !== "" ) {
        linkTag = (
            <a href={ "https://" + link } target="_blank" rel="noreferrer">
                { title } <FaExternalLinkAlt/>
            </a>
        )
    }
    return (
        <h2>
            { imageTag } { linkTag }
        </h2>
    )
}
  