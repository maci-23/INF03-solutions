const btn = document.getElementById("przycisk");

btn.addEventListener("click", () => {
    const file = document.getElementById("plik").files[0];
    const color = document.getElementById("kolor").value;
    const price = document.getElementById("cena").value;
    const fileName = file.name;

    alert("Wzór: " + fileName + ", kolor " + color + " w cenie " + price);

    const section = document.querySelector("section");
    const img = document.createElement("img");

    img.src = fileName;
    img.alt = fileName;
    img.classList.add("miniatury");

    section.appendChild(img);
});