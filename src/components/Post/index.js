import React, { Component } from 'react';
import PostContent from '../PostContent';
import PostReaction from '../PostReaction';
import './Post.css';
class Post extends Component {
    
      state={
          liked:this.props.product.liked,
          claps:this.props.product.claps,
      }
      handleLikeClick=()=>{
        this.setState({
            liked: this.state.liked?false:true
          });
      }
      handleClapClick=()=>{
        this.setState({
            claps:this.state.claps+1
          });
      }
    render() {
        const product = this.props.product;

      return (
          <div className="allPosts">
            <PostContent product={product}/>
            <PostReaction liked={this.state.liked} claps={this.state.claps} handleLikeClick={this.handleLikeClick} handleClapClick={this.handleClapClick}/>
            
          </div>
      );
    }
  }
  export default Post;