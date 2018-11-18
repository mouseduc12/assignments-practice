import React from "react";
import "../ComponentStyles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () =>{
    return(
        <div className="footer">
            <div className = "font">
            <button><FontAwesomeIcon icon={['fab', 'twitter']}/></button>
            <button><FontAwesomeIcon icon={['fab', 'facebook']}/></button>
            <button><FontAwesomeIcon icon={['fab', 'github']}/></button>
            </div>
            <div className = "copy-right">
                <p>Copyright © Your Website 2018</p>
            </div>
        </div>
    )
}

export default Footer;