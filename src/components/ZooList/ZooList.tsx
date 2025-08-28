import { Link } from "react-router-dom";
import { handleBrokenImage } from "../../helpers/image";
import type { Animal } from "../../models/Animal";
import { getOverviewFeedingStatus } from "../../helpers/feeding";
import "./ZooList.scss";
import { useContext, useEffect, useState } from "react";
import { AnimalContext } from "../../context/AnimalContext";

type ZooListProps = {
  animals: Animal[];
};


export const ZooList  = ({ animals }: ZooListProps) => {
    const [statuses, setStatuses] = useState(
    animals.map((a) => getOverviewFeedingStatus(a.lastFed))
  );

   useEffect(() => {
    const interval = setInterval(() => {
      setStatuses(animals.map((a) => getOverviewFeedingStatus(a.lastFed)));
    }, 1000);

    return () => clearInterval(interval);
  }, [animals]);


  

  if (animals.length === 0) return <p>Laddar djur…</p>;

  return (
    <div className="page-content">
      <h2>Här är alla våra djur</h2>
      <div className="zoo-flex">
        {animals.map((animal, index) => {
          const status = getOverviewFeedingStatus(animal.lastFed);
          return (
            <div key={animal.id} className={`theZooPageAnimal ${status}`}>
              <Link to={`/zoo/${animal.id}`} className="link">
                <h2>{animal.name}</h2>
                <img
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={handleBrokenImage}
                />
              </Link>
              <p>{animal.shortDescription}</p>
              <p>Senast matad: {new Date(animal.lastFed).toLocaleString()}</p>
              <p>Status: {statuses[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
