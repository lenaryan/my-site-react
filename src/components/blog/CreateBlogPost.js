import React, { Component } from 'react';

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
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
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
                        <button className="btn grey darken-2 z-depth-2 right">Publish</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateBlogPost;