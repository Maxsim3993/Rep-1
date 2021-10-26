
const triggerMenu = document.querySelector(".trigger-menu");
const menu = document.querySelector(".burger-menu");


$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-for').slick('slickGoTo', slideno - 1);
    });
    $('.card-row').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 539,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
})









document.addEventListener('DOMContentLoaded', () => {
    triggerMenu.addEventListener("click", () => {
        menu.classList.toggle('menu-open');
        triggerMenu.classList.toggle('menu-open');
    });
    window.addEventListener("click", e => {
        const target = e.target
        if (!target.closest('.burger-menu') && !target.closest('.trigger-menu')) {
            menu.classList.remove('menu-open');
            triggerMenu.classList.remove("menu-open");
        }
    })

})
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    lastScroll = currentScroll;
});

$(function () {
    //script for popups
    $('a.show_popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('a.close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        return false;
    });

    //script for tabs
    $("div.selectTabs").each(function () {
        var tmp = $(this);
        $(tmp).find(".lineTabs li").each(function (i) {
            $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
                var tab_id=i+1;
                $(tmp).find(".lineTabs li").removeClass("active");
                $(this).parent().addClass("active");
                $(tmp).find(".tab_content div").stop(false,false).hide();
                $(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
                return false;
            });
        });
    });
});










