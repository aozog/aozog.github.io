let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olList = document.createElement("ol");


cities.forEach( el => {
    let liElement = document.createElement("li");
    liElement.className = "city";
    liElement.textContent = el;
    olList.appendChild(liElement);;
});


document.body.appendChild(olList);



