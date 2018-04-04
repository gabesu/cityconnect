$(document)
    .ready(function () {
        $('.faq-card')
            .on('click', function () {
                $('.faq-card')
                    .children('.answer')
                    .hide();
                $(this)
                    .children('.answer')
                    .show();
            });
    });