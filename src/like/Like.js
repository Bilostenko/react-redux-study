import "./like.css";

import { connect } from "react-redux";
import { increment, decrement } from "../actions";

function Likes(props) {
  console.log(props);
  return (
    <div className="button-controls">
      <button className="like-button" onClick={props.onIncrementLikes}>🖤{props.like}</button>
      <button className="dislike-button" onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('mapStateToProps >', state);
  const { like } = state;  
  // вище у нас андефайнед. компонент не отримує стейт
  return {
    like: like.like
  }
}


function mapDispatchToProps(dispacth) {
  return {
    onIncrementLikes: () => dispacth(increment()),
    onDecrementLikes: () => dispacth(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);