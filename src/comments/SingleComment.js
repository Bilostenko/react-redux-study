import './allComments.css'
import { useState, useEffect } from 'react';



function SingleComment(props) {
  const { text, id } = props.comment;
  const [commentText, setCommentText] = useState('')

  const handleUpdate = (event) => {
    event.preventDefault()
    return setCommentText(event.target.value)
    
  }

  useEffect(() => {
    if (text) {
      return setCommentText(text)
    }
  }, [text])

  const handleInput = (event) => {
    return setCommentText(event.target.value)
  }

  return (
    <form className="comments-item" onSubmit={handleUpdate}>
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hiden />
    </form>

  )
}

export default SingleComment