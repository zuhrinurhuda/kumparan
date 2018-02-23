import axios from 'axios'

const save_posts_to_store = (posts) => {
  return {
    type: 'SAVE_POSTS_TO_STORE',
    posts
  }
}

export const fetch_posts_from_api = () => {
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

export const fetch_comments_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/comments'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_comments_to_store(data))
      })
      .catch(err => console.log(err))
  }
}

export const add_new_post = (newPost) => {
  return {
    type: 'ADD_NEW_POST',
    newPost
  }
}