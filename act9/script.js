function calculoVolumen () {

    var altura = document.getElementById("altura").value;

    var radio = document.getElementById("radio").value;

    var radioCuadrado = radio ** 2;

    var volumen = 3.14 * altura * radioCuadrado;

    document.getElementById("Resultado").innerText = volumen;
}