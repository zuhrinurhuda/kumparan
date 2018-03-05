import axios from 'axios'

const save_posts_to_store = (posts) => {
  return {
    type: 'SAVE_POSTS_TO_STORE',
    posts
  }
}

const fetch_posts_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_posts_to_store(data))
      })
      .catch(err => console.log(err))
  }
}

const save_comments_to_store = (comments) => {
  return {
    type: 'SAVE_COMMENTS_TO_STORE',
    comments
  }
}

const fetch_comments_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/comments'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_comments_to_store(data))
      })
      .catch(err => console.log(err))
  }
}

const add_new_post = (newPost) => {
  return {
    type: 'ADD_NEW_POST',
    newPost
  }
}

export {
  fetch_posts_from_api,
  fetch_comments_from_api,
  add_new_post
}