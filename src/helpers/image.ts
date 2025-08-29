// src/helpers/image.ts
// Dynamiskt baserat på var appen är hostad
const basePath = import.meta.env.BASE_URL || "/";
export const fallbackImage = `${basePath}images/fallback.png`;

export const handleBrokenImage = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  console.log("Fallback triggas", e.currentTarget);
  const target = e.currentTarget;
  target.src = fallbackImage;
  target.onerror = null;
};





