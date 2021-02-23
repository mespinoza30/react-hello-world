function Human(props) {
  return (
    <div>
        <h1>This is {props.name}</h1>
        <p>Currently in {props.location}</p>
    </div>
  )
}

export default Human;