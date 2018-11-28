import React from "react";
import { withTheme } from "./ThemeProvider"

const Main = (props) => {
    return (
        <div className={`${props.theme}-header`}>
            {props.theme === "dark" ? <h2>Click to toggle dark theme</h2> : <h2>Click to toggle light theme</h2>}
            <button onClick = {props.toggleHandle}>Toggle</button>
        </div>
    )
}

export default withTheme(Main)