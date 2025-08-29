import { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";
import { ZooList } from "../components/ZooList/ZooList";

const clearStorage = () => {
  localStorage.removeItem("animals");
  alert("LocalStorage tömd!");
};

export const TheZoo = () => {
  const { animals } = useContext(AnimalContext);


  if (animals.length === 0) return <p>Laddar djur…</p>;

  return (
    <>
      <ZooList animals={animals} />
      
      <button onClick={clearStorage} style={{ marginLeft: "20px" }}>
        Töm localStorage
      </button>
    </>
  );
};
