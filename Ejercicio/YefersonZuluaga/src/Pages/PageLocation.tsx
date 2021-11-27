import React , {useState, useEffect} from "react";
import HttpClient from "../helpers/HttpClient";


interface Location{
    name:string;
    created:string;
    id:string;
  }

const PageLocation = () => {


    const [locations, setLocations] = useState([]);
    const [index, setIndex] = useState<number>(1);


    const loadCharactersRM = async () => {

        await HttpClient.get('/location/?page=1')
          .then((res) => {
            setLocations(res.data.results);
           console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      useEffect(() => {
        loadCharactersRM();
      }, [])

      const passPage = () =>{

        setIndex(index+1);

    }
    const backPass = () =>{
        if(index >1){
            setIndex(index-1);
        }
    }
    return(

        <>
        <div className="fondo">
        <div className="container p-4">
        <div className="row">
        {
          locations.length  >  0  &&
          <>
            { locations . map( ( location : Location ,  j )  =>  (
              < >
                    <div className="col-md-4 mt-4" >
                  <div className="card" >
                        <div className="card-body">
                        <h2 className="card-title">{location.name}</h2>
                        <p className="card-text">Identificador : {location.id}</p>
                        <p className="card-text">Creado el : {location.created}</p>
                        </div>
                    </div>
                    </div>
              </>
            ) ) }
            
          </>
        }
        </div>
        </div>
        </div>
      </>
    );
}
export default PageLocation;