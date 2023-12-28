import "./title.css"

import { useDispatch, useSelector } from "react-redux"
import { inputText } from "../actions"
const Title =(props) => {
  const text = useSelector(state => {
    return state.text.text; 
  });
  
  const dispatch = useDispatch()
  const handleChange = (event) => {
   dispatch(inputText(event.target.value))
  }

  return(
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} placeholder="type a message"/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Title