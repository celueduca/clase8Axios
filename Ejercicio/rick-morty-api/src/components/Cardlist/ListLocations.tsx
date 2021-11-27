import React, { useEffect, useState } from 'react'
import httpClient from '../../helpers/HttpClient';
import Location from '../card/Locattion';
import Layout from '../Layout/Index';

 const  Locations =() => {
   const [locations,setlocations] = useState<any>([])
   const loadLocations = async() =>{
      await httpClient.get('/location')
      .then((res) => {
         setlocations(res.data.results);

       })
       .catch((error) => {
         console.log(error);
       });
   }
   useEffect(() => {
      loadLocations();
    }, [])
    return (
       <>
          <Layout>
         <div className="row row-cols-2 row-cols-md-4 g-4">
         <div className="col">
            <Location locations={locations} />
         </div>
         </div> 
         </Layout>
       </>
    )
}

export default Locations;
