import React, { Component } from 'react';

import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {

    render() {
        let totalExp = 0;
        let msg = this.props.won ? "Winner" : "Loser"
        return (
            <div style={{ textAlign: "center" }}>
                <h1>{`Pokedex-${this.props.dex}!`}</h1>
                <p className={`Pokedex-${msg}`}>{msg}</p>
                <p>Total experience is {this.props.exp}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (<Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} key={p.id}/>))}
                </div>
            </div>
        );
    }
}

export default Pokedex;