import React, {useContext} from "react";
import RotomPhone from "C:/Users/tiago/OneDrive/Área de Trabalho/Tiago/Programacoes Random/react/PokedexReact/reactjs/src/Images/Rotom-Phone.png"
import PokedexLogo from "C:/Users/tiago/OneDrive/Área de Trabalho/Tiago/Programacoes Random/react/PokedexReact/reactjs/src/Images/pokedex-logo.png"
import FavoriteContext, { FavoriteProvider } from "../contexts/favoritesContext";

const Navbar = () => {
    
    const {favoritePokemons} = useContext(FavoriteContext);

    //const logoImg = {RotomPhone};

    return(
        <div>
            <nav>
                <div className="logo-pokedex">
                    <div>
                        <img alt = "pokeapi-logo" src = {RotomPhone} className="navbar-img"/>
                    </div>
                    <div>
                        <img alt = "pokedex-logo" src = {PokedexLogo} className="pokedex-logo"/>
                    </div>
                </div>
                <div>{favoritePokemons.length}❤️</div>
            </nav>
        </div>
    );
        
};

export default Navbar;
