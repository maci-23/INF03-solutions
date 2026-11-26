const obraz = document.getElementById("obraz_d");

function zmien(obrazek) {
    obraz.src = obrazek;
}

function oblicz() {
    const a = parseInt(document.getElementById("bok1").value);
    const b = parseInt(document.getElementById("bok2").value);

    const wynik = document.getElementById("wynik");

    if (obraz.src.includes("2d.bmp")) {
        wynik.textContent = "Pole prostokąta wynosi: " + (a * b);
    } else {
        wynik.textContent = "Pole trójkąta wynosi: " + ((a * b) / 2);
    }
}
