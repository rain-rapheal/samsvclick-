$(document).ready(function () {
    $(".owl-theme").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
    // ----------------------
    $(".owl-agencies").owlCarousel(
        {       
                
                autoplay:true,
                autoplayTimeout:8000,
                loop:true,
                margin:1,
                nav:true,
                dots:true,
                navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
                
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
        });
        // ----------------
        $(".owl-hot").owlCarousel(
            {       
                    
                    autoplay:true,
                    autoplayTimeout:8000,
                    loop:true,
                    margin:10,
                    nav:true,
                    dots:true,
                    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
                    
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
            });

});