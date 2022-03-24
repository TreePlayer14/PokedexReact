import React from "react";
import './Pokemon.css';

const Pokemon = (props) => {
    const {pokemon} = props;
    const onHeartClick = () => {
        console.log("pode favoritar");
    }
    //var {pkmn_img} = `C:/Users/tiago/OneDrive/Área de Trabalho/Tiago/Programacoes Random/react/PokedexReact/reactjs/src/Images/animated/${pokemon.id}.gif`;
    //pokemon.sprites.other["official-artwork"].front_default
    const heart = "❤️";
    return (
        <div className={pokemon.types[0].type.name}>
            <div className="pokemon-image-container">
                {pokemon.id <650   ?
                    <img 
                        alt={pokemon.name} 
                        src={require(`C:/Users/tiago/OneDrive/Área de Trabalho/Tiago/Programacoes Random/react/PokedexReact/reactjs/src/Images/animated/${pokemon.id}.gif`)} 
                        className="pokemon-image"
                    />
                    :
                    <img 
                        alt={pokemon.name} 
                        src={require(`C:/Users/tiago/OneDrive/Área de Trabalho/Tiago/Programacoes Random/react/PokedexReact/reactjs/src/Images/animated/${pokemon.id}.png`)} 
                        className="pokemon-image"
                    />
                }
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type,index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            );
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;