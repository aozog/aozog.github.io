


$(document).ready(function () {

    $('#count-sum').click(function () {

        let sum = 0;
        $('.salary').each(function (element) {

            sum += parseFloat($(this).text());
            // sum += Number($(this).text());
            console.log($(this))
        });

        $('#sum').text(sum);

    })

})