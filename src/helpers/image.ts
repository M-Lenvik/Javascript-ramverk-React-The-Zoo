// src/helpers/image.ts
export const fallbackImage = "/images/fallback.png"; // lokal fallback-bild

export const handleBrokenImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  target.src = fallbackImage;
};
