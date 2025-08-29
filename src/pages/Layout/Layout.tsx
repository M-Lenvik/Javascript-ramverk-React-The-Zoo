import { Outlet } from "react-router-dom";
import { AnimalContext } from "../../context/AnimalContext";
import { useReducer, useEffect } from "react";
import type { Animal } from "../../models/Animal";
import { AnimalReducer, AnimalActionTypes } from "../../reducers/AnimalReducer";
import { fetchAnimals } from "../../services/animalService";
import { Header } from "../../components/Header/Header";
import "./Layout.scss";

export const Layout = () => {
  const initial =
    (JSON.parse(localStorage.getItem("animals") || "[]") as Animal[]) || [];
  const [animals, dispatch] = useReducer(AnimalReducer, initial);

  useEffect(() => {
    if (animals.length > 0) return;
    (async () => {
      try {
        const list = await fetchAnimals();
        dispatch({ type: AnimalActionTypes.SET_ANIMALS, payload: list });
      } catch (err) {
        console.error("Kunde inte hämta djur i Layout:", err);
      }
    })();
  }, [animals]);

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      <div className="layout">
        <Header />
        <div className="page-wrapper">
          <div className="content-wrapper">
            <main>
              <Outlet /> {/* Alla sidor renderas här */}
            </main>
          </div>
        </div>
      </div>
    </AnimalContext.Provider>
  );
};
