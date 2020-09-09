function kobe(a, o) {
    let x = a + o;
    if (x >= 0) {
        console.log(`Wynik dodawania wynosi ${x}`);
    } else {
        console.log(`Wynik jest nieprawidłowy`);
    } 
    x = a - o;
    if (x >= 0) {
        console.log(`Wynik odejmowania wynosi ${x}`);
    } else {
        console.log(`Wynik jest nieprawidłowy`);
    } 
    x = a * o;
    if (x >= 0) {
        console.log(`Wynik mnożenia wynosi ${x}`);
    } else {
        console.log(`Wynik jest nieprawidłowy`);
    }
}




kobe(4, 10);

