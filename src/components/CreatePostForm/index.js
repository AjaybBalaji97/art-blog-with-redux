import React, { Component } from 'react';
import './CreatePostForm.css';


class CreatePostForm extends Component {
  render() {
    return (
        <div className="PostForm">
        <h1>New Blog Post</h1>
        <form onSubmit={this.handleSubmit}>
            <p> <label for="title">TITLE:</label><textarea id="title" type="text"  /></p>
            <p><label for="desc">DESCRIPTION</label><textarea id="desc" type="text"  /></p>
            <p><label for="date">Date</label><input id="date" type="date" /></p>
            <p><label for="image">IMAGE</label><input id="image" type="file" /></p>
            <p><input type="submit" /></p>
        </form>
            

        </div>
    );
  }
}

export default CreatePostForm;