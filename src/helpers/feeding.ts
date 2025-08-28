// Hjälpfunktioner för matning
export const getTimeSinceFed = (lastFed: string) => {
  return (Date.now() - new Date(lastFed).getTime()) / (1000 * 60 * 60);
};

// Status för översiktssidan
export const getOverviewFeedingStatus = (lastFed: string): "mätt" | "hungrig" | "desperat" => {
  const hours = getTimeSinceFed(lastFed);
  if (hours < 3) return "mätt";
  if (hours < 5) return "hungrig";
  return "desperat";
};

// Status för detaljsidan
export const getDetailFeedingStatus = (lastFed: string): "mätt" | "hungrig" | "desperat" => {
  const hours = getTimeSinceFed(lastFed);
  if (hours < 4) return "mätt";
  if (hours < 5) return "hungrig";
  return "desperat";
};

// Kan djuret matas på detaljsidan
export const canFeedAnimal = (lastFed: string): boolean => {
  return getTimeSinceFed(lastFed) >= 3;
};

// Hur många timmar tills djuret kan matas
export const getHoursUntilFeedable = (lastFed: string): number => {
  const hours = getTimeSinceFed(lastFed);
  return Math.max(0, 3 - hours);
};