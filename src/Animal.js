//a functional component. with a functional comp u need a return
function Animal(props) {
    return ( //JSX goes in here. looks like html
        <div>
            <h1>{props.mammal}</h1>
            <p>This is a {props.mammal}</p>
        </div>
    )
}

export default Animal;