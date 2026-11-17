//Sposób I
function przeliczanie() {
    let liczbaDziesietna = Number(document.getElementById("liczba").value);
    let liczbaBinarna = "";

    while (liczbaDziesietna != 0) {
        liczbaBinarna = (liczbaDziesietna % 2) + liczbaBinarna;
        liczbaDziesietna = Math.floor(liczbaDziesietna / 2);
    }

    let licznik = 0;
    let wynik = "";

    for (let i = liczbaBinarna.length - 1; i >= 0; i--) {
        wynik = liczbaBinarna[i] + wynik;
        licznik++;

        if (licznik % 4 == 0 && i != 0) {
            wynik = " " + wynik;            
        }
    }

    document.getElementById("wynik").innerHTML = wynik + "<sub>2</sub>";
}

//Sposób II, z wykorzystaniem metody toString()
/*
function przeliczanie() {
    let liczbaDziesietna = Number(document.getElementById("liczba").value);
    let liczbaBinarna = liczbaDziesietna.toString(2); //wartość argumentu odpowiada danemu systemowi, dla 2 jest system binarny

    let licznik = 0;
    let wynik = "";

    for (let i = liczbaBinarna.length - 1; i >= 0; i--) {
        wynik = liczbaBinarna[i] + wynik;
        licznik++;

        if (licznik % 4 == 0 && i != 0) {
            wynik = " " + wynik;
        }
    }

    document.getElementById("wynik").innerHTML = wynik + "<sub>2</sub>";
}
*/