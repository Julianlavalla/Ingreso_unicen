function calcularBhaskara() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById("resultado1").textContent = "x1 = " + x1;
        document.getElementById("resultado2").textContent = "x2 = " + x2;
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        document.getElementById("resultado1").textContent = "x = " + x;
        document.getElementById("resultado2").textContent = "";
    } else {
        document.getElementById("resultado1").textContent = "No hay soluciones reales";
        document.getElementById("resultado2").textContent = "";
    }
}