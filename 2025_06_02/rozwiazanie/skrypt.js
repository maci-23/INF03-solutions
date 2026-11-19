function aktualizuj(przycisk) {
    przycisk.parentElement.style.textDecoration = 'line-through';
}

function dodaj() {
    const tekst = document.getElementById("tekst").value;
    const lista = document.getElementById("lista");

    const nowyElementListy = document.createElement("li");
    nowyElementListy.innerHTML = tekst + '<button onclick="aktualizuj(this)">Wykonane</button>';

    lista.appendChild(nowyElementListy);
}
