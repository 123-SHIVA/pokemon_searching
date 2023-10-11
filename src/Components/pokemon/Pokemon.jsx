import "./Pokemon.css"

function Pokemon({name,image}){


    console.log(name)
    console.log(image)
    return (

        <div className="pokemon">
            <div>{name}</div><br></br>
            <div><img className="pokemon_image" src={image}/></div>
        </div>
    )
}

export default Pokemon;