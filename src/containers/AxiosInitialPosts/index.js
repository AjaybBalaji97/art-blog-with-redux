import React, { Component } from 'react';
import {addBlog} from '../../redux/actions'
import { connect } from 'react-redux'
import App from '../../components/App/index';

// class ConnectedPostReaction extends Component {
//     render() {
//       const liked = this.props.liked?`./Icons/heart-red.svg`:`./Icons/heart-black.svg`;

  
//       return (
//         <div className="main" >
//             <span><img alt="clap" src={`./Icons/clapping.svg`} className='clap' onClick={this.props.handleClapClick}/>
//             <p>{this.props.claps}</p>
//             {
//               <img alt="heart" src={liked} className='heart' onClick={this.props.handleLikeClick} />
//             }
//             </span>
//         </div>
//       );
//     }
//   }
  const mapStateToProps=state=>{
      return{
          blogs:state.blogs
      }
  }
  const mapDispatchToProps = dispatch => {
    return {
      initializePosts: postArray => {
        dispatch(addBlog(postArray))
      }
    }
  }
  const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  export default ConnectedApp;