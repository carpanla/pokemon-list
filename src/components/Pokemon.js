import React from 'react';

const Pokemon = props => {
    const types = props.pokemon.types;
    return <div>
        <li className="PokeCard">
        <img src={props.pokemon.url} alt='' />
        <h2 className="nameTitle">{props.pokemon.name}</h2>
        <ul className="ulStyle">{types.map((type, key) => {
            return (
                <li className="liStyle" key={key}>
                    {type}
                </li>
            )})}
        </ul>
        </li>
    </div>
}

export default Pokemon;