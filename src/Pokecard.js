import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);


export default function Pokecard (props) {

  let threeDigitId = `00${props.id}`.slice(-3);

let imgSrc = `${POKE_API}${threeDigitId}.png`
  return (
    <div className="pokecard">
      <div className="pokecard__name">
        <h3>{props.name}</h3>
      </div>

      <div className="pokecard__image">
        <img src={imgSrc} alt={props.name}/>
      </div>

        <div className="pokecard__info">
          <h4>Type: {props.type}</h4>
          <h4>EXP: {props.experience}</h4>
        </div>
    </div>
  )
}