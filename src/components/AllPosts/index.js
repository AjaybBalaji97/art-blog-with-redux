import React, { Component } from 'react';
import Post from '../Post';
import './AllPosts.css';
class AllPost extends Component {
    
      handleClapClick=(index)=>{
        this.props.onClapClick(index);
      }
      handleLikeClick=(index)=>{
        this.props.onHeartClick(index);
      }
    render() {
        //const posts = this.props.posts;
        console.log(this.props.blogs);
      return (

          <div className="allPostsMain">
            {
            this.props.blogs.map((post,index)=>{
                 return <Post blog={post} key={post.date+post.image+index} onClapClick={()=>this.handleClapClick(index)} onLikeClick={()=>this.handleLikeClick(index)} ></Post>
            })
            }
            
          </div>
      );
    }
  }
  export default AllPost;