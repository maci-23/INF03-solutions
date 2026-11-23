function aktywuj(id) {
    document.querySelectorAll("main section").forEach(sekcja =>
        sekcja.style.display = "none"
    );

    document.getElementById(id).style.display = "block";
}

let szerokosc = 4;

function aktualizuj() {
    szerokosc += 12;

    if (szerokosc > 100) szerokosc = 100;

    document.getElementById("pusty").style.width = szerokosc + "%";
}

function zatwierdz() {
    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    const dataUr = document.getElementById("data").value;

    const ulica = document.getElementById("ulica").value;
    const numer = document.getElementById("numer").value;
    const miasto = document.getElementById("miasto").value;

    const nrTel = document.getElementById("nrTel").value;
    const wybor = document.getElementById("wybor").value;

    console.log(imie + ", " + nazwisko + ", " + dataUr + ", " + ulica + ", " + numer + ", " + miasto + ", " + nrTel + ", " + wybor);
}
