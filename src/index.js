import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import BlogHeader from './components/BlogHeader';
//import BlogFooter from './components/BlogFooter';
//import PostContent from './components/PostContent';
//import PostReaction from './components/PostReaction';
//import Post from './components/Post';
//import AllPosts from './components/AllPosts';
// import CreatePostForm from './components/CreatePostForm';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// const posts=require('../src/mockData')

// ReactDOM.render(
//     <Router>
//         <Switch>
//         <Route exact path = '/home' render = {()=>(<App posts={posts}/>)} />
//         <Route exact path = '/posts' component = {CreatePostForm} />
//         </Switch>
//     </Router>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import { createStore } from 'redux';
import BlogPost from './redux/reducers';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ConnectedCreatePostForm,{CreatePostForm} from './containers/AddBlog';
import AxiosInitialPosts from './containers/AxiosInitialPosts';
import ConnectedPostReaction from './containers/AddPostReaction';
import AllRoutes from '../src/components/AllRoutes';
import {
    addBlog,
    addClap,
    toggleLike
  } from './redux/actions'

const store = createStore(BlogPost,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

render(
    <Provider store={store}>
      <AllRoutes />
    </Provider>,
    document.getElementById('root')
  )
  //store.dispatch(addBlog({title:'Learn about actions',liked:true,claps:3}))
  //store.dispatch(addBlog({title:'Learn about reducers',liked:false,claps:2}))
unsubscribe()