import { INCREMENT, DECREMENT } from './types';

const initialState = {
  like: 0 
};


export const likesReducer = (state = initialState, action) => {
  console.log('likesReducer >', action)
  
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        like: state.like + 1
      };
    case DECREMENT:
      return {
        ...state,
        like: state.like - 1
      }
    default: return state
  }
}