const initialState = {
  users: []
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USERS_TO_STORE':
      return {...state, users: action.users}
    default:
      return state
  }
}

export default userReducers
