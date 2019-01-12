import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const BlogPost = (props) => {
    const { post } = props;
    if (post) {
        return (
            <div className="container section blog-post">
                <div className="card-z-depth-2">
                    <div className="card-content">
                        <h4 className="card-title center">{ post.title }</h4>
                        <p>{ post.content }</p>
                    </div>
                    <div className="card-action grey-text">
                        <div>{moment(post.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
           <div className="container center">
               <p>Loading project...</p>
           </div> 
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(BlogPost);