import { handleBrokenImage } from "../../helpers/image";
import type { Animal } from "../../models/Animal";
import "./AnimalCard.scss";

type AnimalCardProps = {
  animal: Animal;
  status: "mätt" | "hungrig" | "desperat";
  onFeed: () => void;
  feedable: boolean;
};

export const AnimalCard = ({ animal, status, onFeed, feedable }: AnimalCardProps) => {
  return (
    <div className={`animal-card ${status}`}>
      <h1>{animal.name}</h1>
      <img
        src={animal.imageUrl}
        alt={animal.name}
        width="300"
        onError={handleBrokenImage}
      />
      <p>
        <strong>Latinskt namn:</strong> {animal.latinName}
      </p>
      <p>
        <strong>Född:</strong> {animal.yearOfBirth}
      </p>
      <p>{animal.shortDescription}</p>
      <p>{animal.longDescription}</p>
      <p>Senast matad: {new Date(animal.lastFed).toLocaleString()}</p>
      <p>Status: {status}</p>
      <button onClick={onFeed} disabled={!feedable}>
        {feedable ? "Mata djur" : "Kan inte matas än"}
      </button>
    </div>
  );
};
