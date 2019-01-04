import React from 'react';

const BlogPostSummary = ({post}) => {
    return (
        <div className="card z-depth-2 post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <p className="grey-text text-darken-1">2nd January, 12 p.m.</p>
            </div>
        </div>
    )
}

export default BlogPostSummary;