import React from "react";
import { IEpisodes } from "../../interfaces/IEpisodes";

interface Props {
  episode: IEpisodes;
}
const CardEpisodes = ({ episode }: Props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="Card-Container">
        {/* <img className="card-img-top" src={character.image} alt={`${character.name}`}></img> */}
        <h3 className="Card-Container--Title">{episode.name}</h3>
        <div className="Card-Container--Body">
          <h4> Details.</h4>
          <p>
            <span>Id : </span> {episode.id}
          </p>
          <p>
            <span>Name : </span>
            {episode.name}
          </p>
          <p>
            <span>Air Date : </span>
            {episode.air_date}
          </p>
          <p>
            <span>Episode : </span>
            {episode.episode}
          </p>
          <p>
            <span>Created : </span>
            {episode.created}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardEpisodes;
