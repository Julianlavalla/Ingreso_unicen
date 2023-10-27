function calculo () {

    let velocidad = document.getElementById("velocidad").value;

    let distancia = document.getElementById("distancia").value;

    var number = distancia / velocidad;

    var decimalTimeString = number;

    var n = new Date(0,0);

    n.setMinutes(+decimalTimeString * 60);

    var resultado = n.toTimeString().slice(0, 5);

    document.getElementById("Resultado").innerText = "horas: " + resultado;
}

