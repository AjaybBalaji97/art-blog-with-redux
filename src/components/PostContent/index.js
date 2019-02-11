import React, { Component } from 'react';
import './PostContent.css';
class PostContent extends Component {
    render() {
      const product = this.props.product;
  
      return (
        <div className="main" >
                <div className="backgroundImage" style={{ backgroundImage: `url("./Images/${product.image}")` }} />

                <div className="imageInfo">

                    <span>{product.date}</span><span>{product.readingTime}</span>
                </div>
                <div className="imageDesc">
                    <span >{product.title}</span>
                    <span className="imageContent">{product.description}</span>

                </div>
                <hr />
        </div>
      );
    }
  }
  export default PostContent;