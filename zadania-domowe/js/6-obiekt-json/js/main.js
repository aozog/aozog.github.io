let jsonPracownicy = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" },
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]
};

console.log(jsonPracownicy.pracownicy);



jsonPracownicy.pracownicy.forEach(function (pracownik, index) {
    console.log(pracownik.firstName, pracownik.lastName, index);
});
