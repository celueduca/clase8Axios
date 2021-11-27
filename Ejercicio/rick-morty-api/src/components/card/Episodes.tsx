import React from 'react'

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
           <div className="card" key={id}>

           <div className="card-body" >
             <h5 className="card-title">{name}</h5>
             <p className="card-text">{episode}</p>
             <p className="card-text">{air_date}</p>


           </div>
           </div>
          ))}
       </>
    )
}

export default Episodes;
