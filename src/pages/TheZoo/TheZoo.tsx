import { useEffect, useState } from "react";
import { fetchAnimals } from "../../services/animalService";
import { type Animal } from "../../models/Animal";
import "./TheZooo.scss";



export const TheZoo = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    // Kolla om vi redan har djur i state
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
        <h1>The Zoo</h1>
        {(() => {
            if (animals.length === 0) {
                return <p>Laddar djur...</p>;
            } else {
                return animals.map(a => (
                    <div className="theZooPageAnimal"
                    
                    key={a.id}>
                        <h2>{a.name}</h2>
                        <img src={a.imageUrl} alt={a.name} width="150" />
                    </div>
                ));
            }
        })()}
    </>
);

};
