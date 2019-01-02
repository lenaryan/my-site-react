import React, { Component } from 'react';
import BlogPostSummary from './BlogPostSummary';

class Blog extends Component {
    render() {
        return(
            <div className="container blog">
                <h1 className="center">Blog</h1>
                <div className="blog-posts section">
                    <BlogPostSummary />
                    <BlogPostSummary />
                    <BlogPostSummary />
                </div>
            </div>
        )
    }
}

export default Blog;