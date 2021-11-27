import React from "react";
import HttpClient from "../helpers/HttpClient";
import { useState, useEffect } from "react";

interface Character {
    created: string,
    name: string,
    image: string
  }

const PageCharacter = () => {

    const [characters, setCharacters] = useState([]);

    const [index, setIndex] = useState<number>(1);

    const passPage = () =>{

        setIndex(index+1);

    }
    const backPass = () =>{
        if(index >1){
            setIndex(index-1);
        }
    }
    const loadCharactersRM = async () => {

        await HttpClient.get('/character/?page='+index)
          .then((res) => {
           setCharacters(res.data.results);
           console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      useEffect(() => {
        loadCharactersRM();
      }, [index])

    return(
        <>
        <div className="fondo">
        <div className="container p-4">
        <div className="row">
        {
          characters.length  >  0  &&
          <>
            { characters . map( ( character : Character ,  j )  =>  (
              < >
                    <div className="col-md-4 mt-4" >
                  <div className="card" >
                        <img src={character.image} className="card-img-top" alt="..."   />
                        <div className="card-body">
                        <h2 className="card-title">{character.name}</h2>
                        <p className="card-text">Creado el : {character.created}</p>
                        </div>
                    </div>
                    </div>
              </>
            ) ) }

            
          </>
        }
        </div>
        </div>
        
        <div className="botones">
            < button  onClick={() => backPass()}> Atrás </button>
            < button onClick={()=>passPage()}> Siguiente </button>
            </div>
        </div>
      </>

    );
}
export default PageCharacter;