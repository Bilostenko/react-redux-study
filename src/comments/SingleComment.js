import './allComments.css'

function SingleComment(props){
  console.log("single comment >", props)
  return(
      <form className="comments-item">
        <div className="comments-item-delete">&times;</div>
        <input type="text" />
        <input type="submit" hiden/>
      </form>

  )
}

export default SingleComment