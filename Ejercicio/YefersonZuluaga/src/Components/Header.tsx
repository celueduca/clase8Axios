import React from "react";
import {Link} from "react-router-dom";

const Header = () => {



    return (

    <div className="header">
    <div className="container p-4" >
        <ul className="fila" >
            <li>
                <Link className="colorLink" to="/pageCharacter"> sujetos </Link>
            </li>
            <li>
                <Link className="colorLink" to="/pageLocation"> localizacion</Link>
            </li>
            <li>
                <Link className="colorLink" to="/pageEpisode"> Episodios</Link>
            </li>
        </ul>
        </div>
        </div>

    );
}
export default Header;