

function openCity(evt, tabName) {
    $(".tabcontent").hide();
    $(".tablinks").removeClass("active");
    $("#"+tabName).show();
    $(evt.target).addClass("active");
}