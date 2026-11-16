const chat = document.getElementById("chat");
const przycisk = document.getElementById("przycisk");
const przycisk2 = document.getElementById("przycisk2");
const odpowiedzi = ["Świetnie!", 
                      "Kto gra główną rolę?", 
                      "Lubisz filmy Tego rezysera?", 
                      "Będę 10 minut wcześniej", 
                      "Może kupimy sobie popcorn?", 
                      "Ja wolę Colę", 
                      "Zaproszę jeszcze Grześka", 
                      "Tydzień temu też byłem w kinie na Diunie", 
                      "Ja funduję bilety"
                    ];

przycisk.addEventListener("click", function () {
    const pole = document.getElementById("pole").value;
    const jolanta = document.createElement("section");
    const obraz = document.createElement("img");
    const paragraf = document.createElement("p");

    jolanta.classList.add("jolanta");

    obraz.src = "Jolka.jpg";
    obraz.alt = "Jolanta Nowak";

    paragraf.textContent = pole;

    jolanta.appendChild(obraz);
    jolanta.appendChild(paragraf);

    chat.appendChild(jolanta);
    chat.scrollTop = chat.scrollHeight; //Przewijanie do nowo wstawionej wypowiedzi, metoda 1

    //jolanta.scrollIntoView(); //Przewijanie do nowo wstawionej odpowiedzi, metoda 2
});

przycisk2.addEventListener("click", function () {
    const krzysztof = document.createElement("section");
    const obraz2 = document.createElement("img");
    const paragraf2 = document.createElement("p");
    const losowyIndeks = Math.floor(Math.random() * odpowiedzi.length);
    const losowaOdpowiedz = odpowiedzi[losowyIndeks];

    krzysztof.classList.add("krzysztof");

    obraz2.src = "Krzysiek.jpg";
    obraz2.alt = "Krzysztof Łukasiński";

    paragraf2.textContent = losowaOdpowiedz;

    krzysztof.appendChild(obraz2);
    krzysztof.appendChild(paragraf2);

    chat.appendChild(krzysztof);
    chat.scrollTop = chat.scrollHeight; //Przewijanie do nowo wstawionej wypowiedzi, metoda 1

    //krzysztof.scrollIntoView(); //Przewijanie do nowo wstawionej odpowiedzi, metoda 2
});
