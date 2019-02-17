import React, { Component } from 'react';
//import BlackHeartImage from './Icons/heart-black.svg'
//import RedHeartImage from './Icons/heart-red.svg';
//import ClappingImage from './Icons/clapping.svg';
import './PostReaction.css';
class PostReaction extends Component {
    render() {
      const liked = this.props.liked?`./Icons/heart-red.svg`:`./Icons/heart-black.svg`;

      //console.log(this.props);
      return (
        
        <div className="main" >
            <span><img alt="clap" src={`./Icons/clapping.svg`} className='clap' onClick={this.props.onClapClick}/>
            <span className="claps">{this.props.claps}</span>
            {
              <img alt="heart" src={liked} className='heart' onClick={this.props.onLikeClick} />
            }
            </span>
        </div>
      );
    }
  }
  export default PostReaction;