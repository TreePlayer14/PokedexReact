import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styled from "styled-components";
import './Pokemon.css';

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name);
    }
    //var {pkmn_img} = `C:/Users/tiago/OneDrive/Área de Trabalho/Tiago/Programacoes Random/react/PokedexReact/reactjs/src/Images/animated/${pokemon.id}.gif`;
    //pokemon.sprites.other["official-artwork"].front_default
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <div className={pokemon.types[0].type.name} id="card">
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
                                <Text key={index} className={type.type.name}>{type.type.name}</Text>
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

const Text = styled.div
`
    margin-right: 10px;
    font: bold;
    color: white;
    text-transform: capitalize;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 5px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    width: 90px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export default Pokemon;