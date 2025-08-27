import { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";
import { ZooList } from "../components/ZooList/ZooList";

export const TheZoo = () => {
  const { animals } = useContext(AnimalContext);
  if (animals.length === 0) return <p>Laddar djur…</p>;

  return <ZooList animals={animals} />;
};
