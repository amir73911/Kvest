$(document).ready(function() {

    // Tooltip
    Tipped.create(
        '.sidebar-holder',
        'Развернуть меню',
        {
            position: 'right',
            showDelay: 700
        }
    );

    $('.icon-menu').click(function(e){
        e.preventDefault();
        $('.sidebar').toggleClass('expanded');
    });

    $('select, input[type="checkbox"]').styler();

    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
    $( "#date-input-from" ).datepicker({
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            $( "#date-input-to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#date-input-to" ).datepicker({
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            $( "#date-input-from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });

    tabs_switcher();

});

function tabs_switcher() {
    var link = $('.tab-link a'),
        tab = $('.tab');

    tab.filter('#'+$('.tab-link.active a').attr('href')).show();

    link.click(function(e){
        e.preventDefault();

        $('.tab-link').removeClass('active');
        $(this).parents('.tab-link').addClass('active');
        tab.hide();
        tab.filter('#'+$(this).attr('href')).show();
    });
}