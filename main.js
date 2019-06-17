$(document).ready(function() {
    $("#id td").on('click', function() {
        button = $(this).attr('id')
        console.log("button clicked " + $(this).attr('id'));
        $("#number").val($("#number").val() + button);        
    });
    $("#submit").on('click', function() {
        $("#number").val("");
    });
});
