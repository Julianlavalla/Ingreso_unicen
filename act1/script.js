function intercambiarVariables() {
    //toma las variables A y B
    var valorA = document.getElementById("variableA").value;
    var valorB = document.getElementById("variableB").value;

    //intercambia ambas variables
    [valorA, valorB] = [valorB, valorA];

    document.getElementById("resultado").innerText = "variable A: " + valorA + ", variable B: " + valorB;
}