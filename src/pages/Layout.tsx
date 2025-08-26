import { NavLink, Outlet } from "react-router-dom";
import { AnimalContext } from "../context/AnimalContext";
import { useReducer, useEffect } from "react";
import type { Animal } from "../models/Animal";
import { AnimalReducer, AnimalActionTypes } from "../reducers/animalReducer";
import { fetchAnimals } from "../services/animalService";

export const Layout = () => {
  const initial = (JSON.parse(localStorage.getItem("animals") || "[]") as Animal[]) || [];
  const [animals, dispatch] = useReducer(AnimalReducer, initial);

  useEffect(() => {
    // Hämta bara om djur inte redan finns (t.ex. från LS)
    if (animals.length > 0) return;
    (async () => {
      try {
        const list = await fetchAnimals();
        dispatch({ type: AnimalActionTypes.SET_ANIMALS, payload: list });
      } 
      
      catch (err) {
        console.error("Kunde inte hämta djur i Layout:", err);
      }
    })();
  }, 
  
  [animals]);



    return <>
    <AnimalContext.Provider value={{ animals, dispatch }}>
        <header>
            <p>Meny, finns i layout.tsx</p>
                <nav>
                <ul>
                    <li><NavLink to={"/"}>Start</NavLink></li>
                    <li><NavLink to={"/zoo"}>Zoo</NavLink></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <h2>Outlet, presenteras i layout.tsx</h2>
            <Outlet/> {/* Här laddas alla sidor */}
        </main>
        <footer>
            <h4>Footer</h4>
            <p>&copy; 2025 The Zoo</p>
        </footer>
        </AnimalContext.Provider>
    </>
};