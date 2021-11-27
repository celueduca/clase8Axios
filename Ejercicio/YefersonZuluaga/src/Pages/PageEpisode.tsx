import React , {useState, useEffect} from "react";
import HttpClient from "../helpers/HttpClient";

interface Episode{

    id:string;
    name:string;
    created:string;

}
const PageEpisode = () => {

    const [episodes, setEpisodes] = useState([]);
    const [index, setIndex] = useState<number>(1);

    const loadCharactersRM = async () => {

        await HttpClient.get('/character/?page='+index)
          .then((res) => {
            setEpisodes(res.data.results);
           console.log(res.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      const passPage = () =>{

        setIndex(index+1);

    }
     const backPass = () =>{
        if(index >1){
            setIndex(index-1);
        }
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
          episodes.length  >  0  &&
          <>
            { episodes . map( ( episode : Episode ,  j )  =>  (
              < >
                    <div className="col-md-4 mt-4" >
                  <div className="card" >
                        <h2 className="card-title">{episode.name}</h2>
                        <div className="card-body">
                        <h3 className="card-text"># del episodio : {episode.id}</h3>
                        <p className="card-text">Creado el : {episode.created}</p>
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
export default PageEpisode;