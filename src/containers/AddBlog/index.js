import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../../redux/actions';
import './CreatePostForm.css';
import axios from 'axios';


export class CreatePostForm extends Component {
  state={
    title:'',
    description:'',
    date:'',
    image:'abstract.png',
    readingTime:'2 mins',
    liked:false,
    claps:0
  }
  handleDataChange=(event)=>{
    this.setState({
      [event.target.id]:event.target.value,
    })
  }
  handlePostData= (event)=>{
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(addBlog(this.state))
    this.props.history.push('/home');
    
  }
  render() {
    return (
        <div className="PostForm">
        <h1>New Blog Post</h1>
        <form onSubmit={this.postDate}>
            <p> <label >TITLE:</label>
                <textarea id="title" type="text" value={this.state.title} onChange={this.handleDataChange}/>
            </p>
            <p> <label >DESCRIPTION</label>
                <textarea id="description" type="text" value={this.state.description} onChange={this.handleDataChange}/>
            </p>
            <p> <label >Date</label>
                <input id="date" type="date" value={this.state.date} onChange={this.handleDataChange}/>
            </p>
            <p> <label >IMAGE</label>
                <input id="imageFile" type="text" value={this.state.image} onChange={this.handleDataChange}/>
            </p>
            <p>
                {/* <button type="button" onClick={()=>{
                  this.postDate;
                  window.location.href='/home'}} >Submit</button> */}
                <button className ="submit" type="button" onClick={this.handlePostData} >Submit</button>
            </p>
        </form>
            

        </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//     return {
//       counter:state.
//     }
//   }
  
  const mapDispatchToProps = dispatch => {
    return {
      addBlog:(state)=>{dispatch(addBlog(state))},
      
    }
  }

export default connect(mapDispatchToProps)(CreatePostForm)
