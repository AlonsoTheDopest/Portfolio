import { FaExternalLinkAlt } from "react-icons/fa"

import "./index.css"

export default function SectionHeader( { title, link } ) {
    let linkTag = <>{ title }</>

    if ( link != "" ) {
        linkTag = <a href={ "https://" + link } target="_blank" rel="noreferrer">{ title } <FaExternalLinkAlt/></a>
    }
    return (
        <h2>{ linkTag }</h2>
    )
}
  