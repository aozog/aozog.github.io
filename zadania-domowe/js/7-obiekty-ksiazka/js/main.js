
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana
    }

    opiszKsiazke() {
        let takCzyNie = "";
        if (!this.przeczytana) {
            takCzyNie = " nie";
        }
        return (`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i${takCzyNie} została przeczytana.`);
    }
}


let ksiazkaPierwsza = new Ksiazka("Pułapki myślenia", "Daniel Kahneman", false);

let ksiazkaDruga = new Ksiazka("Pilot i ja", "Adam Bahdaj", true);

let ksiazkaTrzecia = new Ksiazka("Zabić drozda", "Harper Lee", false);


let arrKsiazki = [ksiazkaPierwsza, ksiazkaDruga, ksiazkaTrzecia];



function iloscPrzeczytanych(arrKsiazki) {

    let iloscPrzeczytanychKsiazek = 0;
    arrKsiazki.forEach(function (element) {
        if (element.przeczytana) {
            iloscPrzeczytanychKsiazek += 1;
        }
        console.log(element.opiszKsiazke());
    });
    console.log(`Ilość przeczytanych książek ${iloscPrzeczytanychKsiazek}`);
}


iloscPrzeczytanych(arrKsiazki);