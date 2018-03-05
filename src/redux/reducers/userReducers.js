const initialState = {
  users: [],
  userProfile: {}
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USERS_TO_STORE':
      return { ...state, users: action.users }
    case 'SAVE_USER_PROFILE':
      return { ...state, userProfile: action.userData }
    case 'ADD_NEW_USER':
      return { ...state, users: state.users.concat(action.newUser) }
    default:
      return state
  }
}

export default userReducers
