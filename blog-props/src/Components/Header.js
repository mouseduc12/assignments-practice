import React from "react";
import Nav from "./Nav"
import "../ComponentStyles/Header.css"

const Header = () =>{
    return(
        <div className = "img-background">
           <Nav/>
           <div className = "theme">
               <h1>Clean Blog</h1>
               <h4>A Blog Theme By Start Bootstrap</h4>
            </div>
        </div>
    )
}

export default Header