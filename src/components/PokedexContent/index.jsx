import React from "react";
import styles from "./PokedexContent.module.css";
import { Card } from "../Card";
export const PokedexContent = (props) => {
  console.log(props);
  return (
    <div>
      <div className={`${styles.content_info}`}>
        <p
          className={`${styles.content_isWinner} ${
            props.isWinner ? styles.winner : styles.loser
          }`}
        >
          {props.isWinner ? "Winner" : "Loser"}
        </p>
        <p className={`${styles.content_power}`}>
          Total power: {props.totalPower}
        </p>
      </div>
      <div className={`${styles.container}`}>
        {props.pokemons?.map((pokemon) => (
          <Card
            key={"pokecard" + pokemon.id}
            {...pokemon}
            // type={pokemon.type}
            // name={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
};
