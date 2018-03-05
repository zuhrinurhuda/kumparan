import axios from 'axios'

const save_users_to_store = (users) => {
  return {
    type: 'SAVE_USERS_TO_STORE',
    users
  }
}

const fetch_users_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_users_to_store(data))
      })
      .catch(err => console.log(err))
  }
}

const save_user_profile = (userData) => {
  return {
    type: 'SAVE_USER_PROFILE',
    userData
  }
}

const add_new_user = (newUser) => {
  return {
    type: 'ADD_NEW_USER',
    newUser
  }
}

export {
  fetch_users_from_api,
  save_user_profile,
  add_new_user
}