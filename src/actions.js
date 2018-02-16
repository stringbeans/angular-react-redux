export const addName = (name) => {
  console.log('add name action')
  return {
    type: 'ADD_NAME',
    value: name
  }
}