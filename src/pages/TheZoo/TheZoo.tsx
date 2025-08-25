import { useEffect, useState } from "react";
import { fetchAnimals } from "../../services/animalService";
import { type Animal } from "../../models/Animal";
import "./TheZooo.scss";
import { Link } from "react-router-dom";

const clearStorage = () => {
    localStorage.removeItem("animals");
    alert("LocalStorage tömd!");
  };





export const TheZoo = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    // Kolla om djur redan finns i state
    if (animals.length > 0) return;

    const loadAnimals = async () => {
            const localData = localStorage.getItem("animals");
            if (localData) {
                setAnimals(JSON.parse(localData));
            } else {
                const animalsFromApi = await fetchAnimals();
                setAnimals(animalsFromApi);
                localStorage.setItem("animals", JSON.stringify(animalsFromApi));
            }
        }


    loadAnimals();
  }, [animals]);

  if (animals.length === 0) {
    return <p>Laddar djur…</p>;
  }





    return (
    <>
    <button onClick={clearStorage} style={{ marginLeft: "20px" }}>
        Töm localStorage
      </button>



        <h1>The Zoo</h1>
        {(() => {
            if (animals.length === 0) {
                return <p>Laddar djur...</p>;
            } 
            
            else {
                return animals.map(a => (
                    <div className="theZooPageAnimal"
                    key={a.id}>
                        <Link to={`/zoo/${a.id}`} className="link">
                            <h2>
                                {a.name}
                            </h2>
                            <img src={a.imageUrl} alt={a.name} width="150" />
                        </Link>
                    </div>
                ));
            }
        })()}
    </>
);

};

