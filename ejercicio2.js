// Ejercicio 2
// Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
// Imprime ambos conteos por consola.

const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "Gladiator", releaseYear: 2000 },
  { title: "Titanic", releaseYear: 1997 },
];

let before2000 = 0;
let after2000 = 0;

for (const movie of movies) {
  if (movie.releaseYear < 2000) {
    before2000++;
  } else {
    after2000++;
  }
}

console.log("Películas antes del 2000:", before2000);
console.log("Películas del 2000 o posteriores:", after2000);
