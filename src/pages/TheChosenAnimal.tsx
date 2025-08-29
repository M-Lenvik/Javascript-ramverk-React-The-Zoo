/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { AnimalContext } from "../context/AnimalContext";
import {
  getDetailFeedingStatus,
  canFeedAnimal,
  getHoursUntilFeedable,
} from "../helpers/feeding";
import { AnimalActionTypes } from "../reducers/animalReducer";

export const TheChosenAnimal = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { animals, dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => a.id === Number(id));
  if (!animal) return <p>Laddar djur…</p>;

  const [status, setStatus] = useState(getDetailFeedingStatus(animal.lastFed));
  const [feedable, setFeedable] = useState(canFeedAnimal(animal.lastFed));
  const [hoursLeft, setHoursLeft] = useState(
    getHoursUntilFeedable(animal.lastFed),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getDetailFeedingStatus(animal.lastFed));
      setFeedable(canFeedAnimal(animal.lastFed));
      setHoursLeft(getHoursUntilFeedable(animal.lastFed));
    }, 1000);

    return () => clearInterval(interval);
  }, [animal.lastFed]);

  const handleFeed = () => {
    if (!feedable) return;
    dispatch({ type: AnimalActionTypes.FEED_ANIMAL, payload: animal.id });
  };

  return (
    <AnimalCard
      animal={animal}
      status={status}
      onFeed={handleFeed}
      feedable={feedable}
      onBack={() => navigate(-1)}
    >
      {!feedable && (
        <p>
          Du kan mata {animal.name} om {hoursLeft.toFixed(1)} timmar
        </p>
      )}
    </AnimalCard>
  );
};
