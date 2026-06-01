$(document).ready(function(){ 
    window.addEventListener('load', AOS.refresh);
    AOS.init({
        disable: function() {
            return window.innerWidth < 800;
        }
    });
    


    $(".navicon .nav-toggle").on("click", function() {
            $(this).toggleClass("active"), $(".detailHeader").toggleClass("active"), $("body").toggleClass("headerOpen")
        });

    var e = $("#parent .child").length,
            o = $(".child").height(),
            t = e * o - $("#parent").height();
        $(document).on("click", "#down", function() {
            var e = $("#parent").scrollTop();
            $("#parent").scrollTop(o + e), e == t ? $(this).hide() : $("#up").show()
        }), $(document).on("click", "#up", function() {
            var e = parseInt($("#parent").scrollTop());
            $("#parent").scrollTop(e - o), o + e == o ? $(this).hide() : $("#down").show()
        });

        let myNavigationBurger = document.querySelector(".main-burger");
            let navigationOverlayCross = document.querySelector(".cross-wrapper");


            // time line
            let navigationOverlayTimeline = gsap.timeline({paused: true});

            navigationOverlayTimeline.to(".main_navigation-overlay",{
                xPercent: 100,
                duration: 1,
                ease: " power1.inOut"
            });

            navigationOverlayTimeline.from(".main_nav-list li",{
                // y: -window.outerHeight,
                y: -860,
                opacity: 0,
                duration: 1,
                stagger: .4,
                ease: "power1.inOut"
                // onComplete: function() {
                //     gsap.from(".main_nav-list li a",{
                //         rotation: 45,
                //         duration: 1,
                //         stagger: .2
                //     });    
                // }
            },.5);

            navigationOverlayTimeline.from(".cross-wrapper",{
                scale: 0,
                ease: "elastic",
                duration: .5
            });


            if (myNavigationBurger) {
                myNavigationBurger.addEventListener("click", function() {
                    navigationOverlayTimeline.play();
                    navigationOverlayTimeline.timeScale(2);
                });
            }

            if (navigationOverlayCross) {
                navigationOverlayCross.addEventListener("click", function() {
                    navigationOverlayTimeline.reverse();
                });
            }

            // Popup Close Script
                $('.cross').click(function(){
                    $('#popup_form').css('display', 'none');
                    // $('body').removeClass('modal-open').css('padding-right', '0');
                    // $('div').removeClass('modal-backdrop fade show');
                });
                $('.popup-open').click(function(){
                    $('#popup_form').css('display', 'block');
                    // $('body').removeClass('modal-open').css('padding-right', '0');
                    // $('div').removeClass('modal-backdrop fade show');
                })

                // banner Section Animation
        let ctaSection = document.querySelectorAll('.home-banner')

        var ctaTL = gsap.timeline({
        scrollTrigger:{
            trigger: ctaSection,
            toggleActions: "restart none none none",
            start: "top 70%",
            end: "bottom 50%",
            markers: false,
        }
        })
        ctaTL
        //  .set(".cta-mobile", {opacity:0, y:"150px"})
        //  .set(".banner-ipad", {x:"100%"})
         .set(".banner-ipad-side-img", {y:"35px"})
        //  .to(".cta-mobile", {opacity:1, y:"0", duration:.5, ease: "power1.out"})
         .to(".banner-ipad", {x:"0", duration:1.5, ease: "power1.out"})
        //  .to(".cta-mobile-hand", {x:"0", duration:1.5, ease: "power1.out"}, "-=.5")
         .to(".banner-ipad-side-img", {y:"0px", opacity:1, duration:3.5, stagger:.04, ease: "elastic.out(1, 0.3)"}, "-=.2")
        //  .to(".animImg img", {scale: 1, duration:2, stagger:.5}, "-=.8")


        $(".main-banner").on({
            mousemove: function(e) {
                e.stopPropagation();
                e.preventDefault();
                let Xvalue = - e.clientX * .03;
                let Yvalue = - e.clientY * .03;
                $(".banner-right-wrap img").css("transform",`translate(${Xvalue}px,${Yvalue}px)`);
                // $(".banner-img-wrap img:last-child").css("transform",` translate(${-Xvalue}px,${-Yvalue}px)`);
                $(".banner-right-wrap img").css("transform",`translate(${Xvalue}px,${Yvalue}px)`);
    
            },
            mouseleave: function() {
                $(".banner-right-wrap img").css("transform",`translate(0,0)`);
                $(".banner-right-wrap img").css("transform",`translate(0,0)`);
                // $(".banner-img-wrap img:nth-child(4)").css("transform",`translate(0,0)`);
                // $(".cta-right-wrapper-images img:last").css("transform",`translate(0,0)`);
    
            }
        });


        $(".feature-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav:true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            dots: false,  
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    
                    575:{
                        items:1
                    },
                    991:{
                        items:1
                    },
                    1024:{
                        items:2
                    },
                    1200: {
                        items:3
                    }
                }        
            });

            $(window).width() <= 991 && 0 != ".design-wrapper-slider".length && ($(".design-wrapper-slider").addClass("owl-carousel owl-theme"), $(".design-wrapper-slider").owlCarousel({
                loop: false,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: !0,
                autoplayTimeout: 4e3,
                autoplayHoverPause: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 1
                    }
                }
            }));

            $(window).width() <= 991 && 0 != ".pricing-pg-packages".length && ($(".pricing-pg-packages").addClass("owl-carousel owl-theme"), $(".pricing-pg-packages").owlCarousel({
                loop: false,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: !0,
                autoplayTimeout: 4e3,
                autoplayHoverPause: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 2
                    }
                }
            }));

            $(window).width() <= 991 && 0 != ".our-progress-slider".length && ($(".our-progress-slider").addClass("owl-carousel owl-theme"), $(".our-progress-slider").owlCarousel({
                loop: false,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: 0,
                autoplayHoverPause: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 1
                    }
                }
            }));

           

            $(window).width() <= 991 && 0 != ".process-slider".length && ($(".process-slider").addClass("owl-carousel owl-theme"), $(".process-slider").owlCarousel({
                loop: false,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: !0,
                autoplayTimeout: 4e3,
                autoplayHoverPause: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    991: {
                        items: 2
                    }
                }
            }));
            if ($(window).width() < 825) {
                $('.point-wrap').slick({
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                  
              });
              }


        $(".package-carousel").owlCarousel({
            loop: false,
            margin: 0,
            nav:true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false,
            autoplay:false,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                        dots: true
                    },
                    
                    575:{
                        items:1,
                        nav:false,
                        dots: true
                    },
                    768:{
                        items:2,
                        nav:false,
                        dots: true
                    },
                    992:{
                        items:3
                    },
                    1200: {
                        items:3
                    }
                }        
            });

            $('.index-slider1').slick({
                dots: true,
                arrows: false,
                fade: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                responsive: [
                {
                    breakpoint: 825,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows:false
                    }
                },
                ]
            });

        $(".package-box .pack-detail ul").slimScroll({
                    height: "266px",
                    color: "#fff"
                }), 0 != $(".scroll").length && $(".scroll").slimScroll({
                    height: "170px",
                    size: "6px",
                    color: "#fff",
                    alwaysVisible: !0,
                    distance: "16px",
                    railVisible: !0,
                    railColor: " rgb(209, 0, 29)",
                    railOpacity: 1,
                    railBorderRadius: "0px",
                    wheelStep: 10,
                    disableFadeOut: !1
                });
});     

        $(function() {
            $(".nav-link").on("click", function() { 
                if($(".tab-pane").hasClass("active")) {
                    $(".tab-pane").find(".port-img").addClass("animate__animated animate__zoomIn");
                }
            });
        });

        $(function() {
            $(".nav-link").on("click", function() { 
                if($(".tab-pane").hasClass("active")) {
                    $(".tab-pane").find(".item, .pack-anim-col").addClass("animate__animated animate__zoomIn");
                }
            });
        });