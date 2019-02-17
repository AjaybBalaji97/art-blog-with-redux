import React, { Component } from 'react';
import App from '../App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AxiosInitialPosts from '../../containers/AxiosInitialPosts';
import ConnectedCreatePostForm,{CreatePostForm} from '../../containers/AddBlog';
const posts=require('../../mockData')
class AllRoutes extends Component {
        
        
        render() {
            //const posts = this.props.posts;
    
          return (
            <div>           
                <Router>
                    <Switch>
                        <Route exact path = '/home' component = {AxiosInitialPosts} />
                        <Route exact path = '/posts' component = {ConnectedCreatePostForm} />
                    </Switch>
                </Router>
            </div>

          );
        }
      }
export default AllRoutes;