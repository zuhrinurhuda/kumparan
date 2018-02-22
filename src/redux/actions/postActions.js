import axios from 'axios'

const save_posts_to_store = (posts) => {
  return {
    type: 'SAVE_POSTS_TO_STORE',
    payload: posts
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