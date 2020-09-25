
const setBackground = () => {
    let p1 = document.querySelector(".first-paragraph");
    let p2 = document.querySelector(".last-paragraph");

    p1.classList.add("bg-red");
    p2.classList.add("bg-yellow");



    // p1.classList.toggle('bg-red');
    // p2.classList.toggle('bg-yellow');

    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = "yellow"
};

let btnSetBg = document.getElementById("set-bg");


btnSetBg.addEventListener('click', setBackground); 


