const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 53, name: 'Thriller' },
  { id: 37, name: 'Western' },
  { id: 878, name: 'Science Fiction' },
  { id: 9648, name: 'Mystery' },
  { id: 10751, name: 'Family' },
  { id: 10402, name: 'Music' },
  { id: 10749, name: 'Romance' },
  { id: 10770, name: 'TV Movie' },
  { id: 10752, name: 'War' },
];

/*
*  API с офф. документации https://developers.themoviedb.org/3/genres/get-movie-list
*  объект который приходит с сервера содержит след. значения:
*  ...,
*  "genre_ids": [ 28, 12, 14, 35 ],
*  ...,
*  вставляем массив в функцию и она вернет Вам массив жанров
*/

export const searchGenre = (genresArr) => {
  const counter = [];
  for (let i = 0, value = genresArr.length; i < value; i += 1) {
    genres.filter(item => (item.id === genresArr[i]) && counter.push(item.name));
  }
  console.log(counter);
  return counter;
};
