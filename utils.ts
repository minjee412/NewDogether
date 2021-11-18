export const makeImgPath = (img: string, width: string = "w400") =>
  `https://image.tmdb.org/t/p/${width}${img}`;
