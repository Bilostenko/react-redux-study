import './allComments.css'
import { useState, useEffect } from 'react';
import { commentUpdate } from '../actions';
import { commentDelete } from '../actions';
import { useDispatch } from 'react-redux';



function SingleComment(props) {
  const { text, id } = props.comment;
  const [commentText, setCommentText] = useState('')
  const dispatch = useDispatch()

  const handleUpdate = (event) => {
    event.preventDefault()
    return dispatch(commentUpdate(commentText, id))
    
  }
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(commentDelete(id)); 
  };
  
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
      <div onClick={handleDelete} className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hiden />
    </form>

  )
}

export default SingleComment