import React from "react";
import "../ComponentStyles/BlogList.css"

const BlogList = (props) =>{

    return(
        <div className="blog-list">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h5>{props.author}</h5>
            <hr/>
        </div>
    )
}

export default BlogList