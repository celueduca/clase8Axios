import React from "react";
import { Link } from "react-router-dom";

const PageMain = () => {

    return(

        <div>
        <h1>Main</h1>
        
        <ul>
            <li><Link to="/pageCharacter"> sujetos </Link></li>
            <li><Link to="/pageLocation"> localizacion </Link></li>
            <li><Link to="/pageEpisode"> Episodios </Link></li>
        </ul>
        </div>
    );
}
export default PageMain;