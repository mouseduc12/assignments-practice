import React from "react";
import { withTheme } from "./ThemeProvider"

const Footer = (props) => {
    return(
        <div className = {`${props.theme}-header`}>
           <h3 style ={{textAlign: "center"}}>Amazing Footer</h3>
        </div>
    )
}

export default withTheme(Footer);