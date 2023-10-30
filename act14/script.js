function restAbsoluta () {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num1 > num2) 
    {
        const resta1 = num1 - num2;

        document.getElementById("resultado").innerText = resta1;
    }
    else if (num1 < num2)
    {
        const resta2 = num2 - num1;

        document.getElementById("resultado").innerText = resta2;
    }
    else if (num1 === num2)
    {
        const cancel = 0;

        document.getElementById("resultado").innerText = cancel;
    }

}