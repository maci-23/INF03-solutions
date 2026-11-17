const obrazGlowny = document.getElementById("obraz");
const blokOkna = document.getElementById("okno");

function podmien(miniatura) {
    obrazGlowny.src = miniatura;
}

function otworzOkno() {
    blokOkna.style.display = "block";
    document.getElementById("obrazOkno").src = obrazGlowny.src;
}

function zamknij() {
    blokOkna.style.display = "none";
}