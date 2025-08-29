// src/reducers/AnimalReducer.ts
import type { Animal } from "../models/Animal";

export const AnimalActionTypes = {
  SET_ANIMALS: "SET_ANIMALS",
  FEED_ANIMAL: "FEED_ANIMAL",
  RESET_FEEDING_STATUS: "RESET_FEEDING_STATUS",
} as const;

export type AnimalActionTypes =
  (typeof AnimalActionTypes)[keyof typeof AnimalActionTypes];

export type AnimalAction = 
| {
  type: typeof AnimalActionTypes.SET_ANIMALS;
  payload: Animal[];
  }
| {
    type: typeof AnimalActionTypes.FEED_ANIMAL;
    payload: number; // djurets id
  }
| { type: typeof AnimalActionTypes.RESET_FEEDING_STATUS };

export const AnimalReducer = (
  state: Animal[],
  action: AnimalAction,
): Animal[] => {
  switch (action.type) {
    case AnimalActionTypes.SET_ANIMALS:
      localStorage.setItem("animals", JSON.stringify(action.payload));
      return action.payload;


      case AnimalActionTypes.FEED_ANIMAL: {
      const newState = state.map((a) =>
        a.id === action.payload ? { ...a, lastFed: new Date().toISOString() } : a
      );
      localStorage.setItem("animals", JSON.stringify(newState));
      return newState;
    }



    case AnimalActionTypes.RESET_FEEDING_STATUS: {
      const newState = state.map((animal) => ({ ...animal }));
      localStorage.setItem("animals", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};
