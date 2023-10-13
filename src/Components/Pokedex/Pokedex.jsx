import Search from "../Serach/Search";
import Pokemonlist from "../pokemonlist/Pokemonlist";
import "./Pokedex.css"

function Pokedex(){

    return (
        <div className="Pokedex-wrapper">
  
          <Search/>
          <Pokemonlist/>
        </div>
    )
}

export default Pokedex;