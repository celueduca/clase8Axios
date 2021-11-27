import React from 'react'
import image from "../img/banner.jpg";
interface Props {
   episodes:Episodes[],
  
}
interface Episodes {
   id: number,
   name: string,
   air_date: string,
   episode: string,
}
 const  Episodes =({episodes}: Props) => {
    return (
       <>
          {episodes.map(({air_date,id,name,episode}: Episodes) => (
            <div className="col-6 mt-5 col-md-4 rotate col-lg-2 hover-episode " key={id}>
              <img src={image} className=" card-img-top" alt="..." />

            <h5  className="text-color-brand card-title">
              {episode}
            </h5>
            <p className=" text-color-brand card-text">{name}</p>
            </div>
          ))}
       </>
    )
}

export default Episodes;
