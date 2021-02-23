//a functional component. with a functional comp u need a return
function Animal(props) {
    return ( //JSX goes in here. looks like html
        <div>
            <h1>{props.mammal}</h1>
            <p>This is a {props.mammal}</p>
            <h1>{props.name}</h1>
            <p>This is {props.name}</p>
        </div>
    )
}

export default Animal;