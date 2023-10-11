import { useEffect, useState } from "react"
import axios from "axios"
import "./Pokemonlist.css"
import Pokemon from "../pokemon/Pokemon"

function Pokemonlist(){

    const [pokemonlist,setPokemonlist]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    const POKEDEX_URL="https://pokeapi.co/api/v2/pokemon"

const downloadPokemon=(async ()=>{
    const response=await axios.get(POKEDEX_URL)
    const pokemonResults=response.data.results;
    const pokemonResultsPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url))
    const pokemonData=await axios.all(pokemonResultsPromise)

    console.log(pokemonResults)

     const pokeListResult=pokemonData.map((pokeData)=>{
        const pokemon=pokeData.data

        return {
            id:pokemon.id,
            name:pokemon.name,
            image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_default,
            types:pokemon.types
        }
       
    })
  console.log(pokeListResult)
    setIsLoading(false);
    setPokemonlist(pokeListResult);
})


useEffect(()=>{
    downloadPokemon();
    
},[])

    return(
        <div className="pokemon-list-wrapper">
           <div>Pokemon List</div>
           
            {    isLoading ? "Loading..." : pokemonlist.map(( p )=> {
                   return  (
                  <Pokemon 
                  name={p.name} 
                  image={p.image}
                  key={p.id} />
                
                  )   
                  
                   })}
            

        
        </div>
    )

}
export default Pokemonlist