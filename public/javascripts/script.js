$(document).ready(function () {

    $(".button-collapse").sideNav();


    $('.slider').slider();


    $("select").material_select();


    $(".button-collapse").sideNav({
        draggable: true
    });

    $('.parallax').parallax();


    $('.slider').slider();


    $('.modal').modal({
        dismissible: false,
        opacity: .5
    });

    // $('#modal1').modal('open');

    $(".dropdown-button").dropdown({

    });

    $('input.autocomplete').autocomplete({
        data: {
            "Sciences": null,
            "LASUCOM": null,
            "Arts": null,
            "Law": null,
            "Management Sciences": null,
            "Social Sciences": null,
            "Engineering": null,
            "School OF Communication": null,
            "School OF Transport": null,

        },
        limit: 3, // The max amount of results that can be shown at once. Default: Infinity.
        minLength: 3, // The minimum length of the input for the autocomplete to start. Default: 1.
    });
});
