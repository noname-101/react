import React from "react";

const Footer = (props) =>{
    return(
        <footer>
            <p>{props.tagline}</p>
            <p>{props.copyright}</p>
        </footer>
    );
}

export default Footer