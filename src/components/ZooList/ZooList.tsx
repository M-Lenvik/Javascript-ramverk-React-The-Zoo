import { Link } from "react-router-dom";
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import { handleBrokenImage } from "../../helpers/image";
import "./ZooList.scss";


export const ZooList =()=> {
    const {animals} = useContext(AnimalContext);
    
  if (animals.length === 0) return <p>Laddar djur…</p>;

return (
  <div className="page-content">
    <h2>Här är alla våra djur</h2>

    <div className="zoo-flex">
      {animals.map((a) => (
        <div key={a.id} className="theZooPageAnimal">
          <Link to={`/zoo/${a.id}`} className="link">
            <h2>{a.name}</h2>
            <img
              src={a.imageUrl}
              alt={a.name}
              onError={handleBrokenImage}
            />
          </Link>
          {a.shortDescription}
        </div>
      ))}
    </div>
  </div>
);

};
