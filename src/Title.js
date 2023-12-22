import "./title.css"
const Title =(props) => {

  const handleChange = () => {
    return (event) => {
      props.onChange(event.target.value);
    }
  }

  return(
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange()} />
      </div>
    </div>
  )
}

export default Title