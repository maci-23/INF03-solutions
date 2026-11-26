const pacjenci = {
    "id": "1",
    "imie": "Agnieszka",
    "nazwisko": "Nowak",
    "wystawca": "lek. Marian Kowal",
    "numer": "4387203",
    "recepty": [
        { "id": "0", "data": "8.03.2025", "kod": "1220", "lek1": "Witamina C", "lek2": "Potas", "lek3": "Syrop prawoślazowy" },
        { "id": "1", "data": "23.04.2025", "kod": "4634", "lek1": "APAP", "lek2": "Witamina B", "lek3": "" },
        { "id": "2", "data": "13.05.2025", "kod": "2913", "lek1": "Melatonina", "lek2": "", "lek3": "" },
        { "id": "3", "data": "30.10.2025", "kod": "1105", "lek1": "Witamina C", "lek2": "Calcium", "lek3": "Sinupret" }
    ]
};

const sekcja = document.getElementById("prawa2");

for (let i = 0; i < pacjenci.recepty.length; i++) {
    const recepta = pacjenci.recepty[i];

    const blok = document.createElement("div");
    blok.classList.add("recepty");

    const data = document.createElement("p");
    data.textContent = "Data wystawienia: " + recepta.data;

    const lista = document.createElement("ol");

    for (let j = 1; j <= 3; j++) {
        const lek = recepta["lek" + j];

        if (lek !== "") {
            const element = document.createElement("li");
            element.textContent = lek;

            lista.appendChild(element);
        }
    }

    const kod = document.createElement("h4");
    kod.textContent = "kod: " + recepta.kod;

    blok.appendChild(data)
    blok.appendChild(lista);
    blok.appendChild(kod);

    sekcja.appendChild(blok);
} 