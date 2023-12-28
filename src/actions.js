import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE } from "./redux/types";

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
