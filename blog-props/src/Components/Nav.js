import React from "react";
import "../ComponentStyles/Nav.css"

const Nav= () =>{
    return(
        <div className="nav">
            <h2>Start Bootstrap</h2>
            <ul className="left-bar">
                <li>
                    HOME
                </li>
                <li>
                    ABOUT
                </li>
                <li>
                    SAMPLE POST
                </li>
                <li>
                    CONTACT
                </li>
            </ul>
        </div>
    )
}

export default Nav;