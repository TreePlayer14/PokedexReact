import React, {useState} from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
    const [search, setSearch] = useState("ditto");

    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    const onButtonClickHandler = () => {
        onSearchHandler(search);
        
    };

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result);
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                    placeholder="Buscar Pokémon"
                    onChange={onChangeHandler}
                />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div className="pokemon-search-card">
                    <div className="card-body">
                        <div>Nome: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        {pokemon.types.map((type,index) => {
                                return (
                                    <div key={index} className="pokemon-type-text">{type.type.name}</div>
                                );
                            })}
                    </div>
                    <img src = {pokemon.sprites.front_default} alt = {pokemon.name}/>        
                </div>
            ): null}
        </div>
    );
};

export default Searchbar;