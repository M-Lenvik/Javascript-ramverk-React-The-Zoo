import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { AnimalContext } from "../context/AnimalContext";

export const TheChosenAnimal = () => {
  const { id } = useParams<{ id: string }>();
  const {animals} = useContext (AnimalContext);

  const animal = animals.find(a => a.id === Number(id));
  if (!animal) return <p>Laddar djur…</p>;


  return <AnimalCard animal={animal} />;

};
