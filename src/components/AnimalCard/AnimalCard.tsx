import { getFeedingStatusText } from "../../helpers/feeding";
import { handleBrokenImage } from "../../helpers/image";
import type { Animal } from "../../models/Animal";
import "./AnimalCard.scss";

type AnimalCardProps = {
  animal: Animal;
  status: "mätt" | "hungrig" | "desperat";
  onFeed: () => void;
  feedable: boolean;
};

export const AnimalCard = ({
  animal,
  status,
  onFeed,
  feedable,
}: AnimalCardProps) => {
  return (
    <div className={`animal-card ${status}`}>
      <div className="image-wrapper">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          width="300"
          onError={handleBrokenImage}
        />

        <div className="heading-background">
          <h4>{animal.name}</h4>
        </div>
      </div>

      <div className="animal-card-description">
        <p>{animal.shortDescription}</p>

        <div className="hungerstatus">
          <p>{getFeedingStatusText(status, animal.name)}</p>
          <p>
            Senast {animal.name} fick mat var{" "}
            {new Date(animal.lastFed).toLocaleString()}.
          </p>
          <button onClick={onFeed} disabled={!feedable}>
            {feedable
              ? `Mata ${animal.name}`
              : `${animal.name} är inte hungrig än`}
          </button>
        </div>

        <p>
          <strong>Latinskt namn: </strong>
          <p>
            {animal.latinName} <br />
          </p>
        </p>

        <p>
          <strong>Född: </strong>
          {animal.yearOfBirth}
        </p>

        <p>
          <strong>Artbeskrivning: </strong>
        </p>
        <p>{animal.longDescription}</p>
      </div>
    </div>
  );
};
