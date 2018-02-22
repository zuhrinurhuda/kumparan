const initialState = {
  posts: []
}

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POSTS_TO_STORE':
      return {...state, posts: action.payload}
    default:
      return state
  }
}

export default postReducers
