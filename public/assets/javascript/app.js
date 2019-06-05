$(document).ready(function () {
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('.modal').modal();

    $("#submit-survey").on("click", (event) => {
        event.preventDefault();

        let newProfile = {
            name: $("#name").val().trim(),
            photo: $('#photo').val().trim(),
            gender: $("gender").val(),
            gender: $("interestedIn").val(),
            scores: [
                $('#test1').val(),
                $('#test2').val(),
                $('#test3').val(),
                $('#test4').val(),
                $('#test5').val(),
                $('#test6').val(),
                $('#test7').val(),
                $('#test8').val(),
                $('#test9').val(),
                $('#test10').val()
            ]
        }

        $.post("api/profile", newProfile)
        .then
    })
});