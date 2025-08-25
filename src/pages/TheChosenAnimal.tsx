import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { type Animal } from ".././models/Animal";
import { AnimalCard } from "../components/AnimalCard";

export const TheChosenAnimal = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    if (!id) return;

    const localData = localStorage.getItem("animals");
    if (!localData) return;

    const animals: Animal[] = JSON.parse(localData);
    const foundAnimal = animals.find(a => a.id === Number(id));
    if (foundAnimal) setAnimal(foundAnimal);
  }, [id]);

  if (!animal) return <p>Laddar djur…</p>;


  return <AnimalCard animal={animal} />;

};
