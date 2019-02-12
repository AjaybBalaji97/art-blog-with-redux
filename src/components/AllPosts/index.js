import React, { Component } from 'react';
import Post from '../Post';
import './AllPosts.css';
class AllPost extends Component {
    
      
    render() {
        //const posts = this.props.posts;

      return (
          <div className="allPostsMain">
            {
            this.props.posts.map((post,index)=>{
                 return <Post product={post} key={post.date+post.image+index}></Post>
            })
            }
            
          </div>
      );
    }
  }
  export default AllPost;