import React, { useEffect, useState } from 'react'
import httpClient from '../../helpers/HttpClient';
import Episodes from '../card/Episodes';
import Episode from '../card/Episodes';
import Layout from '../Layout/Index';

 const  ListEpisodes =() => {
   const [episodes,setEpisodes] = useState<any>([])
   const loadEpisode = async() =>{
      await httpClient.get('/episode')
      .then((res) => {
         setEpisodes(res.data.results);

       })
       .catch((error) => {
         console.log(error);
       });
   }
   useEffect(() => {
      loadEpisode();
    }, [])
    return (
       <>
        <Layout>
         <div className="row row-cols-2 row-cols-md-4 g-4">
         <div className="col">
            <Episodes episodes={episodes} />
         </div>
         </div> 
         </Layout>
       </>
    )
}

export default ListEpisodes;
