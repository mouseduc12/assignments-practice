import React from "react";
import BlogList from "./BlogList";
import "../ComponentStyles/BlogPost.css"
const blogs = [
    {
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Posted by Start Bootstrap on September 24, 2018"
    },
    {
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subtitle: "",
        author: "Posted by Start Bootstrap on September 18, 2018"
    },
    {
        title: "Science has not yet mastered prophecy",
        subtitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Posted by Start Bootstrap on August 24, 2018"
    },
    {
        title: "Failure is not an option",
        subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Posted by Start Bootstrap on July 8, 2018"
    }
]

const BlogPost = () =>{
    return(
        <div class="blog-post">
            {blogs.map(each => <BlogList title ={each.title} subtitle ={each.subtitle} author ={each.author}/>)}
            <button>Older Post</button>
            <hr/>
        </div>
    )
}

export default BlogPost