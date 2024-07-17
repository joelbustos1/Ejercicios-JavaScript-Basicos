const jurassicPark = {
    nombre:"Jurassic Park",
    opinion:"Es la mejor peli del mundo",
    puntaje:1000
  };
  
const comando = {
    nombre:"Commando",
    opinion:"no conozco",
    puntaje: 0
  };
  
  // otras pelis
const toyStory = {
    nombre: "Toy Story",
    opinion: "es una muy buena pelicula",
    puntaje: 1000
};

const harryPotter = {
    nombre: "Harry Potter",
    opinion: "Muy buenas todas",
    puntaje: 10000
};

const misPelis = [jurassicPark, comando, toyStory, harryPotter];
console.log(`El nombre de la primera pelicula es: ${misPelis[0].nombre}`);
console.log(`El puntaje de la primera pelicula es: ${misPelis[0].puntaje}`);
console.log(`El nombre de la segunda pelicula es: ${misPelis[1].nombre} y su puntaje es: ${misPelis[1].puntaje}`);
console.log(`El total de peliculas es de ${misPelis.length}`);