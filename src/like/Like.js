import "./like.css";

import { connect } from "react-redux";

function Likes(props) {
  console.log(props);
  return (
    <div className="button-controls">
      <button className="like-button" onClick={props.onIncrementLikes}>🖤{props.like}</button>
      <button className="dislike-button" onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state){
  console.log('mapStateToProps >', state);
  const { likesReducer } = state;  
  // вище у нас андефайнед. компонент не отримує стейт

  return{
    like:likesReducer.like
  }
}


function mapDispatchToProps(dispacth){
  return{
    onIncrementLikes:()=> dispacth({type:'INCREMENT'}),
    onDecrementLikes:()=> dispacth({type:'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);