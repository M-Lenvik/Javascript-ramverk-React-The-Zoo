import { getFeedingStatus } from "../../helpers/feeding";
import { handleBrokenImage } from "../../helpers/image";
import type { Animal } from "../../models/Animal";
import "./AnimalCard.scss";

export const AnimalCard = ({ animal }: { animal: Animal }) => {
  const status = getFeedingStatus(animal.lastFed);

  return (
    <div className="page-content">

      <div className={`animal-card ${status}`}> {/* dynamisk klass */}
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

        <p>Status: {getFeedingStatus(animal.lastFed)}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

