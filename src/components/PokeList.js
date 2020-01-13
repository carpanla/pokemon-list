import React from 'react';

const PokeList = props => {
    return (
        <ul className="PokemonList">
          {props.children}
        </ul>
     )
}
export default PokeList;