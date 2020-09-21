let button = document.querySelector('button')


button.onclick = function() {
    // let ulList = document.getElementById('items');
    let liElements = document.getElementsByClassName('item');
    // let liElements = ulList.children;
    let liElement = document.createElement("li");
    liElement.className = "item";
    liElement.textContent = 'Item ' + (liElements.length + 1);
    document.getElementById('items').appendChild(liElement);
}


