$('.cat-menu').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
    dots: true,
});



$('.reviews-1').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
    arrows: true,
    dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
