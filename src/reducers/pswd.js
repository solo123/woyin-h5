const initialState = {
  reset: true
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'RESET_ALL_PSWD':
      return {
        ...state,
        reset: true
      }
    default:
      return state
  }
}