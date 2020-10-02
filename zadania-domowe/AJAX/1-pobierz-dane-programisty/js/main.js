
$(document).ready(function () {

    $('#get-data').click(function () {

        $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {

                let dataParsed = JSON.parse(data);
                // let dataParsed = data;


                let divImie = $('<div></div>').text(`Imię: ${dataParsed.imie}`);
                let divNazwisko = $('<div></div>').text(`Nazwisko: ${dataParsed.nazwisko}`);
                let divZawod = $('<div></div>').text(`Zawód: ${dataParsed.zawod}`);
                let divFirma = $('<div></div>').text(`Firma: ${dataParsed.firma}`);
                let hr = $('<hr />')


                let divDaneProgramisty = $('<div id="dane-programisty"></div>');
                $('#get-data').after(divDaneProgramisty);

                divDaneProgramisty.append(divImie);
                divDaneProgramisty.append(divNazwisko);
                divDaneProgramisty.append(divZawod);
                divDaneProgramisty.append(divFirma);
                divDaneProgramisty.append(hr);



            });

    });
}) 