import React from "react";

const BlogPost = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section blog-post">
            <div className="card-z-depth-2">
                <div className="card-content">
                    <h4 className="card-title center">Blog Post Title - {id}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quod!</p>
                </div>
                <div className="card-action grey-text">
                    <div>2nd January, 12p.m.</div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;