import React, { Component } from 'react';
import './CreatePostForm.css';
import axios from 'axios';


class CreatePostForm extends Component {
  state={
    title:'',
    description:'',
    date:'',
    imageFile:'',
    loading:false,
    status:0
  }
  handleDataChange=(event)=>{
    this.setState({
      [event.target.id]:event.target.value,
    })
  }
  handlePostData=async (event)=>{
    event.preventDefault();
    const title=this.state.title;
    const description=this.state.description;
    const date=this.state.date;
    const imageFile=this.state.imageFile
    this.setState({
      loading:true,
    })
    const data={
      title,
      description,
      date,
      imageFile
    }
    return await  axios.post('/blog',data).then(response=>{
      console.log(response);
      this.setState({
        loading:false,
        status:response
      })
      //return response
    }).catch(error=>{
      console.log(error);
      this.setState({
        loading:false,
      })
      //return error
    })
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
                <input id="imageFile" type="file" value={this.state.imageFile} onChange={this.handleDataChange}/>
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

export default CreatePostForm;