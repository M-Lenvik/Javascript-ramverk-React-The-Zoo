import type { Animal } from "../models/Animal";

export const AnimalActionTypes = {
  SET_ANIMALS: "SET_ANIMALS",
} as const;

export type AnimalActionTypes = typeof AnimalActionTypes[keyof typeof AnimalActionTypes];
export type AnimalAction =
  | { type: typeof AnimalActionTypes.SET_ANIMALS; payload: Animal[] };


export const AnimalReducer = (state: Animal[], action: AnimalAction): Animal[] => {
  switch (action.type) {
    case AnimalActionTypes.SET_ANIMALS: {
      const newState = action.payload;
      localStorage.setItem("animals", JSON.stringify(newState));
      return newState;
    }
    
    default:
      return state;
  }
};
