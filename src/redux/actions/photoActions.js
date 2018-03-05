import axios from 'axios'

const save_albums_to_store = (albums) => {
  return {
    type: 'SAVE_ALBUMS_TO_STORE',
    albums
  }
}

const fetch_albums_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/albums'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_albums_to_store(data))
      })
      .catch(err => console.log(err))
  }
}

const save_photos_to_store = (photos) => {
  return {
    type: 'SAVE_PHOTOS_TO_STORE',
    photos
  }
}

const fetch_photos_from_api = () => {
  return (dispatch, getState) => {
    let url = 'https://jsonplaceholder.typicode.com/photos'
    axios.get(url)
      .then(({ data }) => {
        dispatch(save_photos_to_store(data))
      })
      .catch(err => console.log(err))
  }
}

export {
  fetch_albums_from_api,
  fetch_photos_from_api
}