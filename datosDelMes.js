const numeroDeMes = process.argv[2];

/* 
 utiliza el siguiente array para obtener la información del mes
*/

const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Comienzo clases",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Cumple Belen",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Dia del trabajo",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Paso a la inmortalidad Manuel Belgrano",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Mi cumpleanios",
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Dia del ninio",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Sin eventos",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Halloween",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Dia de la soberania",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad",
  }
]


const posicionEnElArray = numeroDeMes - 1;
// Recordá que el array comienza en 0
// el mes 1 corresponde a la posición 0
// el mes 2 corresponde a la posición 1
const infoDelMes = informacionMensual[posicionEnElArray];


console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);

// # Descomentar las siguientes lineas y hacer que funcionen

console.log("Cantidad de días:", infoDelMes.cantidadDeDias);
console.log("Evento del mes:", infoDelMes.eventoDelMes);
