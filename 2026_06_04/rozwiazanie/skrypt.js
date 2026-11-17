const btnUczestnik = document.querySelector('#btnUczestnik');
const btnRezerwacja = document.querySelector('#btnRezerwacja');
const imie = document.querySelector('#imie');
const nazwisko = document.querySelector('#nazwisko');
const liczbaOsob = document.querySelector('#osoby');
const miejsceWylotu = document.querySelector('#wylot');
const polaWyboru = document.querySelectorAll('input[type="radio"]');

btnUczestnik.style.backgroundColor = 'DodgerBlue';

function uczestnik() {
    btnUczestnik.style.backgroundColor = 'DodgerBlue';
    btnRezerwacja.style.backgroundColor = 'SkyBlue';

    imie.disabled = false;
    nazwisko.disabled = false;
    
    liczbaOsob.disabled = true;
    miejsceWylotu.disabled = true;

    polaWyboru.forEach(pole => {
        pole.disabled = true;
    });
}

function rezerwacja() {
    btnUczestnik.style.backgroundColor = 'SkyBlue';
    btnRezerwacja.style.backgroundColor = 'DodgerBlue';

    imie.disabled = true;
    nazwisko.disabled = true;
    
    liczbaOsob.disabled = false;
    miejsceWylotu.disabled = false;

    polaWyboru.forEach(pole => {
        pole.disabled = false;
    });
}

const zdjecieWycieczki = document.querySelector('#zdjecieWycieczki');
const miejsceWycieczki = document.querySelector('#miejsceWycieczki');

//Obiekt: wycieczki. Właściwości: obraz, miejsca.
const wycieczki = [
    {obraz: '1.jpg', miejsce: 'Barcelona'},
    {obraz: '2.jpg', miejsce: 'Rzym'},
    {obraz: '3.jpg', miejsce: 'Londyn'}
];

let numerWycieczki = 0;

function poprzednie() {
    numerWycieczki--;

    if (numerWycieczki < 0) numerWycieczki = 2;

    zdjecieWycieczki.src = wycieczki[numerWycieczki].obraz;
    miejsceWycieczki.textContent = wycieczki[numerWycieczki].miejsce;
}

function nastepne() {
    numerWycieczki++;

    if (numerWycieczki > 2) numerWycieczki = 0;

    zdjecieWycieczki.src = wycieczki[numerWycieczki].obraz;
    miejsceWycieczki.textContent = wycieczki[numerWycieczki].miejsce;
}