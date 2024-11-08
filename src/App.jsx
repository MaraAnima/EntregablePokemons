import "./App.css";
import poke from "./Components/poke";
import Pokemon from "./Components/Pokemon";

function App() {
  return (
    <div className="row">
      {poke.map((pokemon) => (
        <div className="col-md-4" key={pokemon.id}>
          <Pokemon
            name={pokemon.name}
            type={pokemon.type}
            image={pokemon.image}
          />
        </div>
      ))}
    </div>
  );
}

export default App;