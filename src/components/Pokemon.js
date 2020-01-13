import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = props => {
    const types = props.pokemon.types;
    return <div>
        <li className="PokeCard">
        <img src={props.pokemon.url} alt='' />
        <h2 className="nameTitle">{props.pokemon.name}</h2>
        <ul className="ulStyle">{types.map((type, id) => {
            return (
                <li className="liStyle" key={id}>
                    {type}
                </li>
            )})}
        </ul>
        </li>
    </div>
}

Pokemon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array
}

export default Pokemon;