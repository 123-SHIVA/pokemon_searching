import { useEffect, useState } from "react"
import axios from "axios"
import "./Pokemonlist.css"

function Pokemonlist(){

    const [pokemonlist,setPokemonlist]=useState([])
    const [isLoading,setIsLoading]=useState(true)

const downloadPokemon=(async ()=>{
    const response=await axios.get("https://pokeapi.co/api/v2/pokemon")
    const pokemonResults=response.data.results;
    const pokemonResultsPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url))
    const pokemonData=await axios.all(pokemonResultsPromise)

     setPokemonlist(pokemonData.map((pokeData)=>{
        const pokemon=pokeData.data
        console.log(pokeData.data)
  }))
    setIsLoading(false);
})

useEffect(()=>{
    downloadPokemon();
    
},[])

    return(
        <div className="pokemon-list-wrapper">
           <div>Pokemon List</div>
           {
            (isLoading?"loading...":"Data dwonladed")
           }
        </div>
    )

}
export default Pokemonlist