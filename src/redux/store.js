import { createStore } from 'redux';

const initialState = {
  like: 10
}

const reducer = (state = initialState, action) => {
  console.log('reducer >', action)
  return state
}

const store = createStore(reducer)

export default store
