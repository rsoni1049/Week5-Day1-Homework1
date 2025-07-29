$(document).ready(function() {
    // Add pointer cursor to selectable cells
    $(".cliff-activities td:not(.not-available, th)").css("cursor", "pointer");
    
    // Highlight/unhighlight cells on click
    $(".cliff-activities").on("click", "td:not(.not-available, th)", function() {
        $(this).toggleClass("highlight");
    });
});