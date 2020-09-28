

$(document).ready(function () {


    $('#button-animate').click(function () {

        $('#square').animate({ marginLeft: 100, width: 100, height: 100 }, 3000, function () {

            $('#square').animate( {backgroundColor: 'blue'}, 5000, function() {

                const heading = $('<h2>Animacja zakończona</h2>').css({color: 'yellow', textAlign: 'center', fontSize: 18});
                $('#square').prepend(heading);
            });

        });

    });

});



