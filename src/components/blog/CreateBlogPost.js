import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class CreateBlogPost extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push('/blog');
    }
    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <main className="container">
                <form onSubmit={this.handleSubmit} className="new-post">
                    <h1 className="center">New Post</h1>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input className="white-text" type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea white-text" id="content" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn grey darken-2 z-depth-2 right" type="submit">Publish</button>
                    </div>
                </form>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlogPost);