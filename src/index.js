import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import BlogHeader from './components/BlogHeader';
//import BlogFooter from './components/BlogFooter';
import PostContent from './components/PostContent';
import * as serviceWorker from './serviceWorker';

const products={
    "date": "2nd Januray, 2018",
    "readingTime": "2 mins",
    "title": "The future of abstract art and the culture ...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 10,
    "liked": false,
    "image": "abstract.png"
}
ReactDOM.render(<PostContent product={products} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
