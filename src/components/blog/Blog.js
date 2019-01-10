import React, { Component } from 'react';
import BlogPostSummary from './BlogPostSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from "react-router-dom";

class Blog extends Component {
    render() {
        var {posts} = this.props;
        return(
            <div className="container blog">
                <h1 className="center">Blog</h1>
                <div className="blog-posts section">
                    { posts && posts.map(post => {
                        return (
                            <Link to={'/blog/' + post.id}>
                                <BlogPostSummary post={post} key={post.id} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Blog);