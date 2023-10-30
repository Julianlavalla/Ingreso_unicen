function sacarPromedio () {
    var a = parseFloat(document.getElementById("numero1").value);
    var b = parseFloat(document.getElementById("numero2").value);
    var c = parseFloat(document.getElementById("numero3").value);
    var d = parseFloat(document.getElementById("numero4").value);

    var resultado = (a+b+c+d) / 4;

    document.getElementById("resultado").innerText = resultado;
}