// src/context/AnimalContext.ts
import { createContext, type Dispatch } from "react";
import type { Animal } from "../models/Animal";
import type { AnimalAction } from "../reducers/AnimalReducer";

export type AnimalContextType = {
  animals: Animal[];
  dispatch: Dispatch<AnimalAction>;
};

export const AnimalContext = createContext<AnimalContextType>({
  animals: [],
  dispatch: () => {}, // tom funktion tills Layout ger en riktig dispatch
});
