
/* const inputNameChange = (event) => {
    console.log(event.target.value);
}

inputImie.onkeydown = inputNameChange; */

let button = document.querySelector("button");


let inputImie = document.getElementById("imie");
let inputNazwisko = document.getElementById("nazwisko");
let inputTelefon = document.getElementById("telefon");



let paragraf1 = document.getElementById("name");
let paragraf2 = document.getElementById("surname");
let paragraf3 = document.getElementById("phone");




button.onclick = function (){
    paragraf1.textContent = inputImie.value;
    paragraf2.textContent = inputNazwisko.value;
    paragraf3.textContent = inputTelefon.value;
}


