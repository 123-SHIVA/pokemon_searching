import { useEffect, useState } from "react";
import axios from "axios";
import "./Pokemonlist.css";
import{ AiOutlineLoading3Quarters} from "react-icons/ai"
import Pokemon from "../pokemon/Pokemon";

function Pokemonlist() {
  const [pokemonlist, setPokemonlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [POKEDEX_URL,setPokedex_url]= useState( "https://pokeapi.co/api/v2/pokemon");
  const [prevUrl,setPrevUrl]=useState("")
  const [nextUrl,setnextUrl]=useState("")

  const downloadPokemon = async () => {
    const response = await axios.get(POKEDEX_URL);
    const pokemonResults = response.data.results;

     setnextUrl(response.data.next)
     setPrevUrl(response.data.previous)

    const pokemonResultsPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
      );
      const pokemonData = await axios.all(pokemonResultsPromise);
      
    console.log(pokemonResults);

    const pokeListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      console.log("----------------------------",pokemon)

      return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_default,
          types: pokemon.types,
        };
    });
    console.log(pokeListResult);


    //here are our loading functionality
    setInterval(() => {
        setIsLoading(false);
        
    }, 1000);



    setPokemonlist(pokeListResult);
  };


  useEffect(() => {
    downloadPokemon();
  }, [POKEDEX_URL]);

  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div>

      <div  className="pokemon_wrapper">
        {isLoading
          ?<  AiOutlineLoading3Quarters className="loading"/>
          : pokemonlist.map((p) => {
              return <Pokemon name={p.name} image={p.image} alt="image not found" key={p.id} id={p.id} />;
            })}
      </div>
      <div className="controls">
            <button disabled={prevUrl == null}onClick={()=>setPokedex_url(prevUrl)}>prev</button>
          <button disabled={nextUrl== null}onClick={()=>setPokedex_url(nextUrl)}>Next</button>
      </div>
    </div>
  );
}
export default Pokemonlist;
