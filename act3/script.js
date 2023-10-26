function metrosPies () {

    var metros = document.getElementById("metros").value;

    var metrosPorPies = metros * 3.28;

    document.getElementById("metrosPies").innerText = metrosPorPies;
}