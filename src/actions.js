import { INCREMENT, DECREMENT, INPUT_TEXT } from "./redux/types";

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
