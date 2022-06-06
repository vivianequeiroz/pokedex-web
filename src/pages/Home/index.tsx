import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Home: FunctionComponent = () => {
  return (<div>
    <h1>Home</h1>
    <nav> 
                <Link to="/">Home</Link> 
                   <Link to="pokemon/1">PokemonDetails</Link>
    </nav>        
  </div>);
}