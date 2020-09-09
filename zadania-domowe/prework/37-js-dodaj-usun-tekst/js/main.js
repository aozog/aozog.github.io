let paragraf = document.getElementById("tekst")

let button1 = document.getElementById("dodaj")

let button2 = document.getElementById("usun")

button1.onclick = function () {
    paragraf.textContent = "testowanie przycisków"
}

button2.onclick = function () {
    paragraf.textContent = ""
}

console.log(paragraf);