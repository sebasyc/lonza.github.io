$(document).ready( function () {

    $(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$('header').addClass('fixed')
		} else if ($(this).scrollTop() < 10) {
			$('header').removeClass('fixed')
		}
	})

    $('.btn-menu-xs').click( function () {
        $(this).toggleClass('open')
        $('body').toggleClass('fixed')
        $('.header-nav').toggleClass('open')
    })

    if($(window).innerWidth() >= 992) {
        $('header .btn-nav-first').parent().hover( function () {
            $(this).addClass('show')
        }, function() {
            $(this).removeClass('show')
        })
        $('header .bg-head-nav').hover( function () {
            $(this).parent().parent().removeClass('show')
        })
    } else {
        $('header .caret-nav-xs').click(function() {
            $('.sub-menu').slideUp()
            $(this).parent().toggleClass('open-sub1').siblings().removeClass('open-sub1')
            if($(this).next().is(':visible')){
                 $(this).next().slideUp()
            } else {
                 $(this).next().slideDown()
            }
        })
        $('header .caret-sub-nav-xs').click(function() {
            $('.sub-menu-list').slideUp()
            $(this).parent().toggleClass('open-sub2').siblings().removeClass('open-sub2')
            if($(this).next().is(':visible')){
                 $(this).next().slideUp()
            } else {
                 $(this).next().slideDown()
            }
        })
    }

    $('.slide-home').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 11000,
        arrows: false,
        dots: true,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false
    })

})