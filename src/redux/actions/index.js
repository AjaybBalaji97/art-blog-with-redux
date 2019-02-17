/*
 * action types
 */

export const ADD_BLOG = 'ADD_BLOG'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_CLAP = 'ADD_CLAP'


/*
 * action creators
 */

export function addBlog(payload) {
  return { type: ADD_BLOG, payload }
}

export function toggleLike(index) {
  return { type: TOGGLE_LIKE, index }
}

export function addClap(index) {
  return { type: ADD_CLAP, index }
}