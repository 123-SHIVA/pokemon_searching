import { useParams } from "react-router-dom";
import axios from "axios";
import "./Pokemondetails.css"
import { useEffect,useState } from "react";
function Pokemondetails(){

    const [pokemon,setPokemon]=useState({})
    const {id}= useParams();

    async function downloadPokemon(){

        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
           
        })

        
    }
     useEffect(()=>{
         downloadPokemon();
     },[])


    return (
         <div className="pokemondetails-wrapper">

            <img className="pokemon-image" src={pokemon.image}/>
            <div className="pokemon-name">name:{pokemon.name}</div>
            <div className="pokemon-weight">weight:{pokemon.weight}</div>
            <div className="pokemon-height">height:{pokemon.height}</div>
            <div className="pokemon-types">
        {pokemon.types ? (
          pokemon.types.map((t, index) => <div key={index}>{t}</div>)
        ) : (
          <div>Loading types...</div>
        )}
      </div>

         </div>
    )
}

export default Pokemondetails;