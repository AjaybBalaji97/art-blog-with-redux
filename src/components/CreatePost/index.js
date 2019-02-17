import React, { Component } from 'react';
import './CreatePost.css';


class CreatePost extends Component {
  handleButtonClick=(event) => {
    this.props.history.push('/posts');
  }

  render() {
    return (
      <div className="createPost">
        <button className="button" onClick={this.handleButtonClick}>CreatePost</button>


      </div>
    );
  }
}

export default CreatePost;
