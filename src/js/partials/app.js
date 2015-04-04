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

    table_opener();

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

function table_opener() {

    var table_wrapp = $('.data-table-wrapper');
    table_wrapp.each(function(){
        var top = $(this).find('.data-table').offset().top - $(this).offset().top;
        $(this).append('<div class="maximize-data-table" style="top: '+top+'px"></div>');
    });

    var max_link = $('.maximize-data-table');

    max_link.click(function(e){
        e.preventDefault();
        var par = $(this).parent('.data-table-wrapper');
        par.toggleClass('maximized');

        if (par.hasClass('maximized')) {
            $(this).css('top', '0px');
        } else {
            $(this).css('top', $(this).siblings('.data-table').offset().top - par.offset().top);
        }

    });


}