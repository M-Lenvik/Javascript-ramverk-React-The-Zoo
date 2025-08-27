// src/services/animalService.ts
import type { Animal } from "../models/Animal";

const API_URL = "https://animals.azurewebsites.net/api/animals";

/**
 * Hämtar alla djur från API:t.
 * Returnerar alltid en array, tom om något går fel.
 */
export const fetchAnimals = async (): Promise<Animal[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Kunde inte hämta djur från servern");
    }

    const data: Animal[] = await response.json();
    return data;
  } catch (error) {
    console.error("fetchAnimals error:", error);
    return []; // Returnera alltid en array så komponenten inte kraschar
  }
};
