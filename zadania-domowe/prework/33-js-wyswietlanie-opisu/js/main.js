let paragraf = document.getElementById("opis");

let button = document.querySelector("button");

button.onclick = function (){
    paragraf.textContent = "To chyba jakieś czary";
}

console.log(paragraf);