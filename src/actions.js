import { INCREMENT, 
  DECREMENT, INPUT_TEXT, 
  COMMENT_CREATE, COMMENT_UPDATE, 
  COMMENT_DELETE,
  COMMENT_LOAD
} from "./redux/types";

export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text
  }
}

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: {text, id}
  }
}
export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { text, id }
  };
};


export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    id
  }
}

export const commentsLoad= () => {
  
  return async dispatch =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    const jsonData = await response.json()

    dispatch({
      type: COMMENT_LOAD,
      data: jsonData
    })

  }
}
