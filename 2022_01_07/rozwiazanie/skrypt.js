function miniatury(obraz) {
    document.getElementById("zdjecie").src = obraz;
}

function polubienie() {
    const zdjecie2 = document.getElementById("zdjecie2");

    zdjecie2.src.includes("icon-on.png") ? zdjecie2.src = "icon-off.png" : zdjecie2.src = "icon-on.png";
}
