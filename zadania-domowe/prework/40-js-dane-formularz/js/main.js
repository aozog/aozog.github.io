
/* const inputNameChange = (event) => {
    console.log(event.target.value);
}

inputImie.onkeydown = inputNameChange; */

let button = document.querySelector("button");




button.onclick = function (){
    document.getElementById("name").textContent = document.getElementById("imie").value;
    document.getElementById("surname").textContent = document.getElementById("nazwisko").value;
    document.getElementById("phone").textContent = document.getElementById("telefon").value;
}


