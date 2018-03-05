const initialState = {
  posts: [],
  comments: []
}

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POSTS_TO_STORE':
      return { ...state, posts: action.posts }
    case 'SAVE_COMMENTS_TO_STORE':
      return { ...state, comments: action.comments }
    case 'ADD_NEW_POST':
      return { ...state, posts: state.posts.concat(action.newPost) }
    default:
      return state
  }
}

export default postReducers
