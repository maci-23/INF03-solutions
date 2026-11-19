const lista = document.getElementById('lista');
const przycisk = document.querySelector('nav input[type="button"]');
const poleTekstu = document.getElementById('tekst');

lista.addEventListener('click', function(event) {
    //event.target wskazuje na element, który kliknięto.
    //Porównanie tagu HTML przycisku z tekstem BUTTON,
    //Właściwość tagName przechowuje tag HTML w dużych literach.

    //Metoda closest() na klikniętym elemencie szuka od elementu w górę pierwszego, najbliższego przycisku
    const przyciskListy = event.target.closest("button");

    if (przyciskListy) {
        przyciskListy.closest("li").style.textDecoration = "line-through";
    }
});

przycisk.addEventListener('click', function() {
    const tresc = poleTekstu.value.trim(); //Metoda trim() usuwa białe znaki

    if (tresc === "") 
        return;

    const nowyElementListy = document.createElement('li');
    nowyElementListy.textContent = tresc + " ";

    const nowyPrzycisk = document.createElement('button');
    nowyPrzycisk.textContent = "Wykonane";

    nowyElementListy.appendChild(nowyPrzycisk);
    lista.appendChild(nowyElementListy);

    poleTekstu.value = "";
});




