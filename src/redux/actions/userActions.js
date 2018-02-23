import axios from 'axios'

const save_users_to_store = (users) => {
  return {
    type: 'SAVE_USERS_TO_STORE',
    users
  }
}

export const fetch_users_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_users_to_store(data))
      })
      .catch(err => console.log(err))
  }
}