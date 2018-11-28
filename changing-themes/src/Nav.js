import React from "react";
import "./Nav.css"
import { withTheme } from "./ThemeProvider"
const Nav = (props) => {
    return(
        <div className = {`${props.theme}-header`}>
           <ul className ="full" >
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
        </div>
    )
}

export default withTheme(Nav);