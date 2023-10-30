function sumaDeFracciones () {

    let n1 = parseInt(document.getElementById("numerador1").value);
    let d1 = parseInt(document.getElementById("denominador1").value); 
    let n2 = parseInt(document.getElementById("numerador2").value);
    let d2 = parseInt(document.getElementById("denominador2").value);

    if (d1 === d2) {

        var num = n1+n2;
        var den = d1;

        document.getElementById("resultado").innerText = `${num}/${den}`
}  
    else {
        
        const comunDenominador = d1 * d2;
        const nuevoNumerador1 = n1 * d2;
        const nuevoNumerador2 = n2 * d1;
        const sumaNumeradores = nuevoNumerador1 + nuevoNumerador2;

        document.getElementById("resultado").innerText = `${sumaNumeradores} / ${comunDenominador}`;
    }
}