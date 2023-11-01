function horasADecimal () {

    var horas = parseFloat(document.getElementById("horas").value); // toma el valor de las horas del form
    var minutos = parseFloat(document.getElementById("minutos").value); // toma el valor de los minutos del form
    var segundos = parseFloat(document.getElementById("segundos").value); //toma el valor de los segundos del form

    const resultado = convertirHorasADecimal(horas, minutos, segundos); // declara a la suma de las variables antes tomadas como una sola (resultado)

    document.getElementById("resultado").innerText = `${resultado}`; // pasa la var (resultado) al <p> con id: resultado para mostrarlo en pantalla
}

function convertirHorasADecimal(horas, minutos, segundos) { // funcion en la que se incluyen las variables tomadas anteriormente
    
    const segundosTotales = horas * 3600 + minutos * 60 + segundos; // transforma los valores tomados a segundos
    const numeroDecimal = segundosTotales / 3600; // divide el valor en segundos por 3600 (la cantidad de segundos en una hora)
    return numeroDecimal.toFixed(5); // redondea los decimales a 5
}