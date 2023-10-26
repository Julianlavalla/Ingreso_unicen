function calcularInteres () {

    var pesos = document.getElementById("pesos").value;

    var interes = document.getElementById("interes").value;

    var calculo = pesos * (interes * 0.01);

    document.getElementById("calcularInteres").innerText = parseFloat(calculo)+parseFloat(pesos);
}