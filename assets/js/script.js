/*  Navigation menu toggle on click and closed menu when clicked elsewhere on page
    Taken and altered to change function on device screen width from: https://www.tutorialrepublic.com/faq/hide-dropdown-menu-on-click-outside-of-the-element-in-jquery.php */
$(document).ready(function(){
    $(".dropdown").click(function() {
        if ($(window).width() < 1050) {
        $(this).find(".dropdown-menu").slideToggle("fast");
        }
    });
});
$(document).on("click", function(event){
    if ($(window).width() < 1050) {
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }
    }   
});