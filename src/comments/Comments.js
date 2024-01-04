import './allComments.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentsLoad } from '../actions';
import uniqid from 'uniqid';
import SingleComment from "./SingleComment";

function Comments(props) {

  const [textComment, setTexComment] = useState("")
  const comments = useSelector(state => {
    const { commentReducer } = state
    return commentReducer.comments
  })
  const dispatch = useDispatch()

  const handleInput = (event) => {
    setTexComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = uniqid()
    dispatch(commentCreate(textComment, id))
  }

useEffect(()=>{
  dispatch(commentsLoad())
},[])

  return (
    <div className="card-commnets">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} placeholder='Add a comment and press Enter' />
        <input type="submit" hiden />
      </form>
      {!!comments.length && comments.map(comment => < SingleComment key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default Comments