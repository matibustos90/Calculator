function valor(x) {

    document.getElementById("display").value +=x; // Es para poder aplicar a todos los botones el +=x

    
}
// Vamos a armar el borrar

function borrardisplay(y) {
    document.getElementById("display").value = y;
}

// Calculo del resultado ( BOTON IGUAL)
// eval me permitia trabajar con dif valores que podia acumular. Toma todas las opcionesc presentes
// para obtener un resultado. 

function cal_resultado () {
    var result = eval (document.getElementById(`display`).value); //  Esta variable muestra el resultado
    document.getElementById(`display`).value = result;

}