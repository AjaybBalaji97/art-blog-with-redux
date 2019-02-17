import React, { Component } from 'react';
import PostContent from '../PostContent';
import PostReaction from '../PostReaction';
import './Post.css';
class Post extends Component {
    
      state={
          liked:this.props.blog.liked,
          claps:this.props.blog.claps,
      }
      // handleLikeClick=(index)=>{
      //   // this.setState({
      //   //     liked: this.state.liked?false:true
      //   //   });
      //   this.props.onHeartClick();
      // }
      // handleClapClick=(index)=>{
      //   // this.setState({
      //   //     claps:this.state.claps+1
      //   //   });
      //   this.props.onClapClick();
      // }
      
    render() {
      //console.log('-----',this.props.product);
        const product = this.props.blog;

      return (
          <div className="allPosts">
            <PostContent product={product}/>
            <PostReaction liked={this.props.blog.liked} claps={this.props.blog.claps} onLikeClick={this.props.onLikeClick} onClapClick={this.props.onClapClick}/>
            
          </div>
      );
    }
  }
  export default Post;