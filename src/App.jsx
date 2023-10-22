import { useState } from "react";
import "./App.css";
import { PokeHead } from "./components/PokeHead";
import { PokedexContent } from "./components/PokedexContent";
import Pokemons from "./data/pokemon.json";
function App() {
  // console.log(Pokemons);
  let [firstTeam, setFirstTeam] = useState([]);
  let [secondTeam, setSecondTeam] = useState([]);

  function start() {
    let newFirstTeam = [...Pokemons];
    let newSecondTeam = [];
    while (newSecondTeam.length < newFirstTeam.length) {
      let randomIndex = Math.floor(Math.random() * newFirstTeam.length);
      newSecondTeam.push(newFirstTeam.splice(randomIndex, 1)[0]);
    }
    console.log("newFirstTeam", newFirstTeam);
    console.log("newSecondTeam", newSecondTeam);

    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);
  }
  // console.log(firstTeam, secondTeam);
  let totalPowerFirstTeam = firstTeam.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );
  console.log(totalPowerFirstTeam);
  let totalPowerSecondTeam = secondTeam.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );
  console.log(totalPowerSecondTeam);
  return (
    <>
      <PokeHead onClick={start} />
      {!!secondTeam.length && (
        <>
          <PokedexContent
            isWinner={totalPowerFirstTeam > totalPowerSecondTeam}
            totalPower={totalPowerFirstTeam}
            pokemons={firstTeam}
          />
          <div className={`vs`}>vs</div>
          <PokedexContent
            isWinner={totalPowerFirstTeam < totalPowerSecondTeam}
            totalPower={totalPowerSecondTeam}
            pokemons={secondTeam}
          />
        </>
      )}
    </>
  );
}

export default App;
