// Hjälpfunktioner för matning (testläge med sekunder)

// Returnerar sekunder sedan senaste matning
export const getTimeSinceFed = (lastFed: string) => {
  return (Date.now() - new Date(lastFed).getTime()) / 1000; // sekunder
};

// Status för översikt (ZooList)
export const getOverviewFeedingStatus = (lastFed: string): "mätt" | "hungrig" | "desperat" => {
  const seconds = getTimeSinceFed(lastFed);
  if (seconds < 10) return "mätt";
  if (seconds < 30) return "hungrig";
  return "desperat";
};

// Status för detalj (AnimalCard)
export const getDetailFeedingStatus = (lastFed: string): "mätt" | "hungrig" | "desperat" => {
  const seconds = getTimeSinceFed(lastFed);
  if (seconds < 10) return "mätt";
  if (seconds < 30) return "hungrig";
  return "desperat";
};

// Kan djuret matas på detalj
export const canFeedAnimal = (lastFed: string): boolean => {
  return getTimeSinceFed(lastFed) >= 20; // kan matas efter 20 sekunder
};
