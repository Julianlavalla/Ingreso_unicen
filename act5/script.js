function conversor () {

    var dolares = document.getElementById("dolares").value;

    var euros = dolares * 0.96;

    document.getElementById("conversor").innerText = euros;
}