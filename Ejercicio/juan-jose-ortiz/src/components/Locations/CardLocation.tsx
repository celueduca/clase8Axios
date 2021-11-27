import { ILocation } from "../../interfaces/ILocation";
import "../Characters/CardCharacter.css"

interface Props {
  location: ILocation;
}

const CardCharacter = ({ location }: Props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="Card-Container">
        {/* <img className="card-img-top" src={character.image} alt={`${character.name}`}></img> */}
        <h3 className="Card-Container--Title">{location.name}</h3>
        <div className="Card-Container--Body">
            <h4> Details.</h4>
            <p><span>Id : </span> {location.id} </p>
            <p><span>Name : </span>{location.name} </p>
            <p><span>Dimension : </span>{location.dimension} </p>
            <p><span>Created : </span>{location.created} </p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
