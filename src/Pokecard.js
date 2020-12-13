import React, { Component } from 'react';

import './Pokecard.css';
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png

class Pokecard extends Component {

    render() {
        const { id, name, type, exp } = this.props;
        return (
            <div className="Pokecard">
               <h2>{name}</h2>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${retID(id)}.png`} alt="Pokemon Images"/> 
                <p>Type: {type}<br/>
                Exp: {exp}</p>
            </div>
        );
    }
}

const retID = (id) => {
    const idLen = id.toString().length;
    switch (idLen) {
        case 1: 
            return (`00${id}`);
        case 2: 
            return (`0${id}`);
        case 3:
            return id;
        default:
            return '000';             
    }
};

export default Pokecard;