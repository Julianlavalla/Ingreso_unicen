function decimalAHora () {

    const numeroDecimal = parseFloat(document.getElementById('numeroDecimal').value);
    const resultado = convertirDecimalAHorasMinutosSegundos(numeroDecimal);
    document.getElementById("resultado").innerText = `${resultado}`;

}

function convertirDecimalAHorasMinutosSegundos(decimal) {
    const horas = Math.floor(decimal);
    const minutosDecimal = (decimal - horas) * 60;
    const minutos = Math.floor(minutosDecimal);
    const segundos = Math.round((minutosDecimal - minutos) * 60);

    return `${('00'+horas).slice(-2)}:${('00'+minutos).slice(-2)}:${('00'+segundos).slice(-2)}`;
}