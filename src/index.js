import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import BlogHeader from './components/BlogHeader';
//import BlogFooter from './components/BlogFooter';
//import PostContent from './components/PostContent';
//import PostReaction from './components/PostReaction';
//import Post from './components/Post';
//import AllPosts from './components/AllPosts';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
const posts=require('../src/mockData')

ReactDOM.render(<App posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
