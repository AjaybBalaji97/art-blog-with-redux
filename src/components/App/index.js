import React, { Component } from 'react';
import BlogHeader from '../BlogHeader';
import BlogFooter from '../BlogFooter';
import AddPostReaction from '../../containers/AddPostReaction';
import CreatePost from '../CreatePost';
import './App.css';
import getPosts from  '../../helper/getPosts';
let count=0;
class App extends Component {
state={
  axiosPosts:[],
  loading:true,
}

async componentDidMount (){
    //console.log(this.props);
    return await getPosts().then((res)=>{
      this.setState({
        axiosPosts:res,
        
        loading:false
      });
      if(count===0){
      this.state.axiosPosts.map((post)=>{this.props.initializePosts(post)});
      count=1;
      }
      // this.props.initializePosts({title:'Learn about actions',liked:true,claps:3});
    })
      
   
  }
  componentWillUnmount(){
    console.log('unmount');
  }
  render() {
    //console.log(this.state.axiosPosts);
    //console.log(this.props);
    if(this.state.loading){
      return <div>LOADING...</div>
    }
    else{
    return (
     
      <div className="App">
        <BlogHeader/>
        <AddPostReaction posts={this.props.blogs}/>
        <CreatePost history={this.props.history}/>
        <BlogFooter/>
      </div>
    );
    }
  }
}

export default App;
