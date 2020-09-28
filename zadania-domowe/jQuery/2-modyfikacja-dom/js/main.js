
$(document).ready(function() {

 $('#button-down').click(function() {
    $('p:first').before($('p:last'))
 });


 $('#button-up').click(function() {

    $('p:last').after($('p:first'))

 });
 

})