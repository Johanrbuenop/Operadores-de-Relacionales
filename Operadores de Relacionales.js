let diaHoy = Number(prompt("¿Cuánto tiemo lleva la lasaña en el horno?"));
let diaAyer = Number(prompt("¿Cuánto tiemo lleva la lasaña en el horno?"));
let mesHoy = Number(prompt("¿Cuánto tiemo lleva la lasaña en el horno?"));
let mesAyer = Number(prompt("¿Cuánto tiemo lleva la lasaña en el horno?"));
let mesTexto = String(prompt("¿Cuánto tiemo lleva la lasaña en el horno?"));
let comparacion;

document.write("<h3>Mayor que</h3>" ,"diaHoy ",diaHoy, " es mayor que diaAyer ",diaAyer, ": " , comparacion = diaHoy > diaAyer)

document.write("<h3>Menor que</h3>", "diaHoy ",diaHoy, " es menor que diaAyer ",diaAyer ,": ", comparacion = diaHoy < diaAyer)

document.write("<h3>Mayor o igual</h3>", "diaHoy ",diaHoy, " es mayor o igual que diaAyer ",diaAyer, ": ", comparacion = diaHoy >= diaAyer)

document.write("<h3>Mayor o igual</h3>", "mesHoy ",mesHoy, " es mayor o igual que mesAyer ",mesAyer, ": ", comparacion = mesHoy >= mesAyer)

document.write("<h3>Menor o igual</h3>", "diaHoy ",diaHoy, " es manor o igual que diaAyer ",diaAyer ,": ", comparacion = diaHoy <= diaAyer)

document.write("<h3>Menor o igual</h3>", "mesHoy ",mesHoy ," es maenor o igual que mesAyer ",mesAyer ,": ", comparacion = mesHoy <= mesAyer)

document.write("<h3>Iguales</h3>", "mesTexto ",mesTexto ," es igual a mesAyer ",mesAyer,": ", comparacion = mesTexto == mesAyer)

document.write("<h3>Iguales</h3>", "diaHoy ",diaHoy ," es igual a diaAyer ",diaAyer,": ", comparacion = diaHoy == diaAyer)

document.write("<h3>Iguales</h3>", "mesHoy ",mesHoy ," es igual a mesAyer ",mesAyer ,": ", comparacion = mesHoy == mesAyer)

document.write("<h3>Idénticos</h3>", "mesHoy ",mesHoy," es idéntico a mesAyer ",mesAyer,": ", comparacion = mesHoy === mesAyer)

document.write("<h3>Idénticos</h3>", "mesTexto ",mesTexto," es idéntico a mesAyer ",mesAyer,": ", comparacion = mesTexto === mesAyer)