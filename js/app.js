$(function() {
    console.log("WORK")


    /*$('.cat-menu').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
        dots: false,
    });*/



    $('.reviews-1').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
        arrows: false,
        dots: false,
                responsive: [
                    {
                        breakpoint: 1250,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });

});
