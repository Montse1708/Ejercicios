let calificaciones = [80,50,90,30,100,80];
//Mejores records
let mejor = calificaciones.filter(number => number >= 90);
//Peores records
let peor = calificaciones.filter(number => number < 60);
document.getElementById('calificaciones').innerHTML = calificaciones;
document.getElementById('mejores').innerHTML = mejor;
document.getElementById('peores').innerHTML = peor;

let m = [mejor.length];
let p = [peor.length];
//Array de resultados peores y mejores
let resultados = m.concat(p); 
document.getElementById('resultados').innerHTML = resultados;
