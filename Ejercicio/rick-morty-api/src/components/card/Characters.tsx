import React from "react";
import { Link } from "react-router-dom";
import "./Character.css"
interface Props {
  characters: Character[];
}
interface Character {
  image: string;
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}
const Character = ({ characters }: Props) => {
  return (
    <>
      {characters.map(
        ({
          image,
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          location,
        }: Character) => (
          <div className="col-6 mt-5 col-md-4 rotate col-lg-2 hover " key={id}>
            <Link to={`/Character/${id}`}>
              <img src={image} className=" card-img-top" alt="..." />
            </Link>

            <h5  className="text-color-brand card-title">
              {name}
            </h5>
            <p className=" text-color-brand card-text">{status}</p>
            </div>
        )
      )}
    </>
  );
};

export default Character;
