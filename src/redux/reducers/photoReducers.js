const initialState = {
  albums: [],
  photos: []
}

const photoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_ALBUMS_TO_STORE':
      return { ...state, albums: action.albums }
    case 'SAVE_PHOTOS_TO_STORE':
      return { ...state, photos: action.photos }
    default:
      return state
  }
}

export default photoReducers
