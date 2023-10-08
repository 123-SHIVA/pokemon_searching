import Search from "../Serach/Search";
import "./Pokedex.css"

function Pokedex(){

    return (
        <div className="Pokedex-wrapper">
       <h1 id="pokedex">Pokedex</h1>
          <Search/>
        </div>
    )
}

export default Pokedex;