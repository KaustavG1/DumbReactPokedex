import React, { Component } from 'react';

import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
            { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 122 },
            { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
            { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
            { id: 133, name: 'Eevee', type: 'normal', exp: 65 },
        ]
    };
    
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while(hand1.length < hand2.length) {
            let randomIndex = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2.splice(randomIndex, 1)[0]);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        let isWinner = exp1 > exp2;
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} won={isWinner} dex={1}/>
                <Pokedex pokemon={hand2} exp={exp2} won={!isWinner} dex={2}/>
            </div>
        );
    }
}

export default Pokegame;