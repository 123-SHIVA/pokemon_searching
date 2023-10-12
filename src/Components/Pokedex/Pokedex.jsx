import Search from "../Serach/Search";
import Pokemonlist from "../pokemonlist/Pokemonlist";
import "./Pokedex.css"

function Pokedex(){

    return (
        <div className="Pokedex-wrapper">
       <h1 id="pokedex">Pokedex</h1>
          <Search/>
          <Pokemonlist/>
        </div>
    )
}

export default Pokedex;