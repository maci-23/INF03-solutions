function efekt1() {
    const obraz = document.getElementById("obraz1");

    if (document.getElementById("blur").checked) 
        obraz.style.filter = "blur(6px)";
    
    if (document.getElementById("sepia").checked) 
        obraz.style.filter = "sepia(100%)";
    
    if (document.getElementById("negatyw").checked) 
        obraz.style.filter = "invert(100%)";    
}

function kolor() {
    document.getElementById("obraz2").style.filter = "grayscale(0%)";
}

function czarnoBialy() {
    document.getElementById("obraz2").style.filter = "grayscale(100%)";
}

function efekt3() {
    const wartosc = document.getElementById("suwak1").value;

    document.getElementById("obraz3").style.filter = "opacity(" + wartosc + "%)";
}

function efekt4() {
    const wartosc = document.getElementById("suwak2").value;

    document.getElementById("obraz4").style.filter = "brightness(" + wartosc + "%)";
}
