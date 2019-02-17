import { combineReducers } from 'redux'
import {
  ADD_CLAP,
  TOGGLE_LIKE,
  ADD_BLOG
} from '../actions'



function blogs(state = [], action) {
  switch (action.type) {
    case ADD_BLOG:
      return [
        ...state,action.payload
    ]
    case TOGGLE_LIKE:
      return state.map((blog, index) => {
        if (index === action.index) {
          return Object.assign({}, blog, {
            liked: !blog.liked
          })
        }
        return blog
    })
    case ADD_CLAP:
      return state.map((blog, index) => {
        if (index === action.index) {
          return Object.assign({}, blog, {
            claps: blog.claps+1
          })
        }
        return blog
      })
    default:
      return state
  }
}

const BlogPost = combineReducers({
  blogs
})

export default BlogPost;