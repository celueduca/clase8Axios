import { ICharacter } from "../../interfaces/ICharacter";
import "./CardCharacter.css";

interface Props {
  character: ICharacter;
}

const CardCharacter = ({ character }: Props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="Card-Container">
        <img
          className="card-img-top Card-image"
          src={character.image}
          alt={`${character.name}`}
        ></img>
        <h3 className="Card-Container--Title">{character.name}</h3>
        <div className="Card-Container--Body">
          <h4> Details:</h4>
          <p>
            <span>Status </span>
            {character.status === "Alive" ? (
              <>
                Alive <i className="fas fa-circle IconStatus--alive"></i> -{" "}
                {character.species}
              </>
            ) : character.status === "unknown" ? (
              <>
                Unknown <i className="fas fa-circle IconStatus--unknown"></i> -{" "}
                {character.species}
              </>
            ) : (
              <>
                Dead <i className="fas fa-circle IconStatus--dead"></i> -{" "}
                {character.species}
              </>
            )}
          </p>
          <p>
            <span>Type </span>
            {character.type ? character.type : "N/A"}{" "}
          </p>
          <p>
            <span>Gender  </span>
            <>{character.gender} 
            {character.gender === "Female" ? (
              <i className="ms-2 fas fa-female"></i>
            ) : (
              <i className="ms-2 fas fa-male"></i>
            )}
            </>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
