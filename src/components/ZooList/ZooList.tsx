import { Link } from "react-router-dom";
import { handleBrokenImage } from "../../helpers/image";
import type { Animal } from "../../models/Animal";
import {
  getFeedingStatusText,
  getOverviewFeedingStatus,
} from "../../helpers/feeding";
import "./ZooList.scss";

type ZooListProps = {
  animals: Animal[];
};

export const ZooList = ({ animals }: ZooListProps) => {
  if (animals.length === 0) return <p>Laddar djur…</p>;

  return (
    <div className="page-content">
      <div className="zoo-content">
        <h2>Djuren</h2>
        <p>Mata djuren när de är hungriga</p>
      </div>
      <div className="zoo-flex">
        {animals.map((animal) => {
          const status = getOverviewFeedingStatus(animal.lastFed);
          return (
            <div key={animal.id} className={`theZooPageAnimal ${status}`}>
              <Link to={`/zoo/${animal.id}`} className="link">
                <h3>{animal.name}</h3>
                <img
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={handleBrokenImage}
                />
              </Link>
              <p>{animal.shortDescription}</p>
              <p>
                {getFeedingStatusText(status, animal.name)}
                <br />
                Senast {animal.name} fick mat var{" "}
                {new Date(animal.lastFed).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
