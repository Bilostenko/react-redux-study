import './allComments.css'
import { useState } from 'react';

import SingleComment from "./SingleComment";
function Comments(props){
  console.log("comments >", props)

  const [textComment, setTexComment] = useState("")

  const handleInput = (event) => {
    console.log("input >", event.target.value)
    setTexComment(event.target.value)
  }

  return(
    <div className="card-commnets">
      <form className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput}/>
        <input type="submit" hiden/>
      </form>
      < SingleComment />
    </div>
  )
}

export default Comments