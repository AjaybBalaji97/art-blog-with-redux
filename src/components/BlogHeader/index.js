import React, { Component } from 'react';
import './BlogHeader.css';

class BlogHeader extends Component {
  render() {
    return (
      <div class="header">
      <span class="artifactClass">The Artifact</span>
      <br/>
      <span class="CultureClass">Culture & Art blog</span>
      <div class="header-right">
      <a  href="">Blog</a>
      <a href="">About</a>
      <a href="">Contact</a>
      </div>
      </div>
    )
  }
}

export default BlogHeader;
