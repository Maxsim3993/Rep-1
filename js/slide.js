
    $(document).ready(function () {
        $('.block-sliders').slick({
            infinite: true,
            arrows: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('div[data-slide]').click(function(e) {
            e.preventDefault();
            let slideno = $(this).data('slide');
            $('.block-sliders').slick('slickGoTo', slideno - 1);
        });
    })
