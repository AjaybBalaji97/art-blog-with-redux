import React, { Component } from 'react';
import BlogHeader from '../BlogHeader';
import BlogFooter from '../BlogFooter';
import AllPosts from '../AllPosts';
import CreatePost from '../CreatePost';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogHeader/>
        <AllPosts posts={this.props.posts}/>
        <CreatePost/>
        <BlogFooter/>
      </div>
    );
  }
}

export default App;
