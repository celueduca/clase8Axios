import React from 'react'
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
           <div className="card" key={id}>

           <div className="card-body" >
             <h5 className="card-title">{name}</h5>
             <p className="card-text">{type}</p>

           </div>
           </div>
          ))}
       </>
    )
}

export default Location;
