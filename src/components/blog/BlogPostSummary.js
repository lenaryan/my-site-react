import React from 'react';
import moment from 'moment';

const BlogPostSummary = ({post}) => {
    return (
        <div className="card z-depth-2 post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <p className="grey-text text-darken-1">{moment(post.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default BlogPostSummary;