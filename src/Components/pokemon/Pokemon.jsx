import { Link } from "react-router-dom";
import "./Pokemon.css"

function Pokemon({name,image,alt,id}){


    console.log(name)
    console.log("------------------------------",image);
    return (

      <Link  to={`pokemon/${id}`}>

<div className="pokemon">
            <div>{name}</div><br></br>
            <div><img className="pokemon_image" src={image}  alt={alt}/></div>
        </div>
      </Link>
    )
}

export default Pokemon;