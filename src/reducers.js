export const names = (state = {}, action) => {
  console.log(state, action)
  switch(action.type) {
    case 'ADD_NAME': 
      return {
        name: action.value
      }
    default:
      return state
  }
}