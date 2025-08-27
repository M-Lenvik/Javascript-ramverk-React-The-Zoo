import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { AnimalContext } from "../context/AnimalContext";
import { getDetailFeedingStatus, canFeedAnimal } from "../helpers/feeding";
import { AnimalActionTypes } from "../reducers/AnimalReducer";

export const TheChosenAnimal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals, dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => a.id === Number(id));
  if (!animal) return <p>Laddar djur…</p>;

  const status = getDetailFeedingStatus(animal.lastFed);
  const feedable = canFeedAnimal(animal.lastFed);

  const handleFeed = () => {
    if (!feedable) return;
    const updatedAnimals = animals.map((a) =>
      a.id === animal.id ? { ...a, lastFed: new Date().toString() } : a
    );
    dispatch({ type: AnimalActionTypes.SET_ANIMALS, payload: updatedAnimals });
  };

  return (
    <AnimalCard
      animal={animal}
      status={status}
      feedable={feedable}
      onFeed={handleFeed}
    />
  );
};
