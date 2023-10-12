import { Routes,Route } from "react-router-dom";
import Pokemondetails from "../Components/PokemonDetails/Pokemondetails";
import Pokedex from "../Components/Pokedex/Pokedex";

function Customeroutes(){
      
 return (

  <Routes>

     <Route path="/" element={<Pokedex/>}></Route>
     <Route path="/pokemon/:id" element={<Pokemondetails/>}></Route>

  </Routes>
 )

}

export default Customeroutes