import React, { Component } from 'react';
import './BlogHeader.css';

class BlogHeader extends Component {
  render() {
    return (
      <div className="header">
      <span className="artifactClass">The Artifact</span>
      <br/>
      <span className="CultureClass">Culture & Art blog</span>
      <div className="header-right">
      <a  href="">Blog</a>
      <a href="">About</a>
      <a href="">Contact</a>
      </div>
      </div>
    )
  }
}

export default BlogHeader;
