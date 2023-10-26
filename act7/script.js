function revertirIva () {
    
    var montoIva = document.getElementById("montoIva").value;

    var sinIva = montoIva * 100 / 121;

    document.getElementById("MontoSinIva").innerText = sinIva;
}