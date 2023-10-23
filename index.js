// programa principal //

import Banda from "./banda.js"
import Album from "./album.js"
import Integrantes from "./integrantes.js"
import Canciones from "./canciones.js"


// creamos objetos //
const banda1 = new Banda({nombre : "Metallica", tipo : "Trash Metal",  integrantes : "Lars Ulrich, James Hetfield", anoFundacion: 1981, nacionalidad:"Estados Unidos", anoDisolucion:"Activa", idioma:"Ingles", influencia: "Slayer, Megadeth, Anthrax", instrumentos: "guitarra lider, guitarra armonica, bajo, bateria"})
console.log(banda1)


const Album1 = new Album({nombre : "Kill 'em  All", fechaLanzamiento : 1983,  canciones : "Hit the lights, the four horsemen, Jump in the fire, anesthesia, phantom lord, no remorse ", companiaDiscografica: "Megaforce Records", duracion:"31:15"})
const Album2 = new Album({nombre : "Ride the Lightning", fechaLanzamiento : 1984,  canciones : "Fight Fire with Fire, Ride the Lightning, For Whom the Bell Tolls, Fade To Black, Trapped Under Ice, Escape, Creeping Death, The Call of Kitulu ", companiaDiscografica: "Garage inc.", duracion:"47:24"})
const Album3 = new Album({nombre : "Master of Puppets", fechaLanzamiento : 1986,  canciones : "Hit the lights, the four horsemen, Jump in the fire, anesthesia, phantom lord, no remorse ", companiaDiscografica: "Megaforce Records", duracion:"31:15"})
console.log(Album1)

const Integrantes1 = new Integrantes({nombre : "Lars Ulrich", fechaNacimiento : "Diciembre 26 de 1963",  nacionalidad : "Dinamarca", trayectoria: "compositor, fundador Metallica", nominacion:"Hall of Fame", genero:"M", fechaMuerte:"Activo", instrumento: "Bateria"})
const Integrantes2 = new Integrantes({nombre : "James Hetfield", fechaNacimiento : "Agosto 3 de 1963",  nacionalidad : "Estados Unidos", trayectoria: "Compositor, Vocalista, Guitarrista ritmico, co-fundador Metallica", nominacion:"Hall of fame", genero:"M", fechaMuerte:"Activa", instrumento: "Guitarra Ritmica"})
const Integrantes3 = new Integrantes({nombre : "Dave Mustaine", fechaNacimiento : "Septiembre 13 de 1961",  nacionalidad : "Estados Unidos", trayectoria: "Compositor, vocalista, fundador Megadeth", nominacion:"Mejor guitarrista", genero:"M", fechaMuerte:"Activo", instrumento: "Guitarra Lider"})
console.log(Integrantes1)

const canciones1 = new Canciones({titulo : "Hit the Lights", duracion : "4:17",  letra : "xxxxx"});
const canciones2 = new Canciones({titulo : "The Four Horsemen", duracion : "7:13",  letra : "xxxxx"});
const canciones3 = new Canciones({titulo : "Motorbreath", duracion : "3:08",  letra : "xxxxx"});

const canciones4 = new Canciones({titulo : "Fighy Fire with Fire", duracion : "4:44",  letra : "xxxxx"});
const canciones5 = new Canciones({titulo : "Ride the Lightning", duracion : "6:36",  letra : "xxxxx"});
const canciones6 = new Canciones({titulo : "For Whom the Bell Tolls", duracion : "5:10",  letra : "xxxxx"});

console.log(canciones1)
