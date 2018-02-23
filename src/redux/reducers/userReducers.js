const initialState = {
  users: []
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USERS_TO_STORE':
      return { ...state, users: action.users }
    case 'ADD_NEW_USER':
      let newUsers = state.users.concat(action.newUser)
      return { ...state, users: newUsers}
    default:
      return state
  }
}

export default userReducers
