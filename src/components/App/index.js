import React, { Component } from 'react';
import BlogHeader from '../BlogHeader';
import BlogFooter from '../BlogFooter';
import AllPosts from '../AllPosts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogHeader/>
        <AllPosts posts={this.props.posts}/>
        <BlogFooter/>
      </div>
    );
  }
}

export default App;
