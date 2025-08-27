import { Link } from "react-router-dom";
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import { handleBrokenImage } from "../../helpers/image";
import "./ZooList.scss";
import { getFeedingStatus } from "../../helpers/feeding";



export const ZooList =()=> {
    const {animals} = useContext(AnimalContext);
    
  if (animals.length === 0) return <p>Laddar djur…</p>;

return (
  <div className="page-content">
    <h2>Här är alla våra djur</h2>

    <div className="zoo-flex">
      {animals.map((animal) => {
          const status = getFeedingStatus(animal.lastFed); // <--- här inne
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
              <p>Status: {status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};