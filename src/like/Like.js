import "./like.css";

import { connect } from "react-redux";

function Likes(props) {
  console.log(props);
  return (
    <div className="button-controls">
      <button className="like-button">🖤{props.like}</button>
      <button className="dislike-button">Dislike</button>
    </div>
  );
}

function mapStateToProps(state){
  console.log('mapStateToProps >', state);
  return{
    like:state.like
  }
}

export default connect(mapStateToProps)(Likes);