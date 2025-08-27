// Hjälpfunktion för att räkna ut antal timmar sedan ett datum
const getHoursSince = (dateString: string): number => {
  const time = new Date(dateString).getTime();
  return (Date.now() - time) / (1000 * 60 * 60);
};

// Kollar om djuret är hungrigt baserat på senaste matningen och tröskelvärden
export function getFeedingStatus(lastFed: string): "mätt" | "hungrig" | "desperat" {
  const hoursSinceFed = getHoursSince(lastFed);

  if (hoursSinceFed < 3) return "mätt";
  if (hoursSinceFed < 5) return "hungrig";
  return "desperat";
}

// Kollar om djuret kan matas (4 timmar måste ha gått)
export function canFeedAnimal(lastFed: string): boolean {
  return getHoursSince(lastFed) >= 4;
}
