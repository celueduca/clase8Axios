import React from 'react'
import image from "../img/Home-removebg-preview.png";

interface Props {
   locations:Location[],
  
}
interface Location {
   id: number,
   name: string,
   type: string,
   dimension: string,
}
 const  Location =({locations}:Props) => {
    return (
       <>
          {locations.map(({type,id,name,dimension}: Location) => (
                <div className="col-6 mt-5 col-md-4 rotate col-lg-2 hover-episode " key={id}>
                <img src={image} className=" card-img-top" alt="..." />
  
              <h5  className="text-color-brand card-title">
                {name}
              </h5>
              <p className=" text-color-brand card-text">{dimension}</p>
              </div>
          ))}
       </>
    )
}

export default Location;
