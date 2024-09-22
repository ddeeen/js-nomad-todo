const images = [
  "sunny_night.webp",
  "sunny_earlyNight.webp",
  "cloudy_noon.webp",
  "cloudy_night.webp",
  "rainy_noon.webp",
  "rainy_night.webp",
  "sunny_afternoon.webp",
  "sunny_noon.webp",
  "sunny_morning.webp",
];

document.body.style.backgroundImage = `url(images/${
  images[Math.floor(Math.random() * images.length)]
})`;
