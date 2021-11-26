import React from "react";
import { Link } from 'react-router-dom'

const PageMain = () => {



    const reDirect = () =>{

    
    };

    return(
        <div>
        <h1>Yo soy el main </h1>
        <ul>
            <li><Link to="/pageCharacter" >Personajes</Link></li>
        </ul>
        </div>
    );

}
export default PageMain;