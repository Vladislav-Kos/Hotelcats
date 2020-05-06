$(function() {
    console.log("WORK")


    $('.cat-menu').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: "<img src='img/Group 17.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/Group 18.png' class='next' alt='2'>",
    responsive: [
        {
            breakpoint: 800,
            settings: {
                arrows: false,
            }
        }
    ]
    });


    $('.reviews-1').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        prevArrow: "<img src='img/Group 17.png' class='prev' alt='1'>",
        nextArrow: "<img src='img/Group 18.png' class='next' alt='2'>",
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
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,   
                        }
                    }
                ]
            });

});