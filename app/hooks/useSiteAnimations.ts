import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSiteAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const run = () => {
      initAOS();
      initFancybox();
      initParentScroll();
      initGaspBanner();
      initBannerParallax();
      initCarousels();
      initSlickSliders();
      initSlimScroll();
      initTabAnimations();
    };

    if (document.readyState === "complete") {
      run();
    } else {
      window.addEventListener("load", run);
    }

    return () => {
      window.removeEventListener("load", run);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}

function initAOS() {
  const AOS = (window as any).AOS;
  if (!AOS) return;
  AOS.init({ disable: () => window.innerWidth < 800 });
  window.addEventListener("load", () => AOS.refresh());
}

function initFancybox() {
  const $ = (window as any).$;
  if (!$ || !$.fn.fancybox) return;
  $("[data-fancybox]").fancybox({});
}

function initParentScroll() {
  const $ = (window as any).$;
  if (!$) return;
  const parent = $("#parent");
  if (!parent.length) return;
  const child = $(".child");
  const e = $("#parent .child").length;
  const o = child.height();
  const t = e * o - parent.height();
  $(document).on("click", "#down", function (this: HTMLElement) {
    const e = parent.scrollTop();
    parent.scrollTop(o + e);
    if (e == t) $(this).hide();
    else $("#up").show();
  });
  $(document).on("click", "#up", function (this: HTMLElement) {
    const e = parseInt(parent.scrollTop());
    parent.scrollTop(e - o);
    if (o + e == o) $(this).hide();
    else $("#down").show();
  });
}

function initGaspBanner() {
  const ctaSection = document.querySelector(".home-banner");
  if (!ctaSection) return;
  const ctaTL = gsap.timeline({
    scrollTrigger: {
      trigger: ctaSection,
      toggleActions: "restart none none none",
      start: "top 70%",
      end: "bottom 50%",
      markers: false,
    },
  });
  ctaTL
    .set(".banner-ipad-side-img", { y: "35px" })
    .to(".banner-ipad", { x: "0", duration: 1.5, ease: "power1.out" })
    .to(".banner-ipad-side-img", { y: "0px", opacity: 1, duration: 3.5, stagger: 0.04, ease: "elastic.out(1, 0.3)" }, "-=.2");
}

function initBannerParallax() {
  const $ = (window as any).$;
  if (!$) return;
  const banner = $(".main-banner");
  if (!banner.length) return;
  banner.on({
    mousemove(e: any) {
      e.stopPropagation();
      e.preventDefault();
      const Xvalue = -e.clientX * 0.03;
      const Yvalue = -e.clientY * 0.03;
      $(".banner-right-wrap img").css("transform", `translate(${Xvalue}px,${Yvalue}px)`);
    },
    mouseleave() {
      $(".banner-right-wrap img").css("transform", "translate(0,0)");
    },
  });
}

function initCarousels() {
  const $ = (window as any).$;
  if (!$ || !$.fn.owlCarousel) return;

  $(".feature-carousel").owlCarousel({
    loop: true, margin: 0, nav: true,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    dots: false, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 575: { items: 1 }, 991: { items: 1 }, 1024: { items: 2 }, 1200: { items: 3 } },
  });

  if ($(window).width() <= 991 && $(".design-wrapper-slider").length) {
    $(".design-wrapper-slider").addClass("owl-carousel owl-theme").owlCarousel({
      loop: false, margin: 0, nav: false, dots: true, autoplay: true, autoplayTimeout: 4000,
      autoplayHoverPause: true, mouseDrag: true,
      responsive: { 0: { items: 1 }, 460: { items: 1 }, 767: { items: 1 }, 991: { items: 1 } },
    });
  }

  if ($(window).width() <= 991 && $(".pricing-pg-packages").length) {
    $(".pricing-pg-packages").addClass("owl-carousel owl-theme").owlCarousel({
      loop: false, margin: 0, nav: false, dots: true, autoplay: true, autoplayTimeout: 4000,
      autoplayHoverPause: true, mouseDrag: true,
      responsive: { 0: { items: 1 }, 460: { items: 1 }, 767: { items: 1 }, 991: { items: 2 } },
    });
  }

  if ($(window).width() <= 991 && $(".our-progress-slider").length) {
    $(".our-progress-slider").addClass("owl-carousel owl-theme").owlCarousel({
      loop: false, margin: 0, nav: false, dots: true, autoplay: false, autoplayHoverPause: true, mouseDrag: true,
      responsive: { 0: { items: 1 }, 460: { items: 1 }, 767: { items: 1 }, 991: { items: 1 } },
    });
  }

  if ($(window).width() <= 991 && $(".process-slider").length) {
    $(".process-slider").addClass("owl-carousel owl-theme").owlCarousel({
      loop: false, margin: 0, nav: false, dots: true, autoplay: true, autoplayTimeout: 4000,
      autoplayHoverPause: true, mouseDrag: true,
      responsive: { 0: { items: 1 }, 460: { items: 1 }, 767: { items: 2 }, 991: { items: 2 } },
    });
  }

  $(".package-carousel").owlCarousel({
    loop: false, margin: 0, nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    dots: false, autoplay: false, autoplayTimeout: 3000, autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false, dots: true },
      575: { items: 1, nav: false, dots: true },
      768: { items: 2, nav: false, dots: true },
      992: { items: 3 }, 1200: { items: 3 },
    },
  });
}

function initSlickSliders() {
  const $ = (window as any).$;
  if (!$ || !$.fn.slick) return;

  if ($(window).width() < 825) {
    $(".point-wrap").slick({
      infinite: true, slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false,
    });
  }

  $(".index-slider1").slick({
    dots: true, arrows: false, fade: true, infinite: true, speed: 1000,
    slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 1500,
    responsive: [{ breakpoint: 825, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false, arrows: false } }],
  });
}

function initSlimScroll() {
  const $ = (window as any).$;
  if (!$ || !$.fn.slimScroll) return;

  $(".package-box .pack-detail ul").slimScroll({
    height: "266px", color: "#fff",
  });

  if ($(".scroll").length) {
    $(".scroll").slimScroll({
      height: "170px", size: "6px", color: "#fff", alwaysVisible: true,
      distance: "16px", railVisible: true, railColor: "rgb(209, 0, 29)",
      railOpacity: 1, railBorderRadius: "0px", wheelStep: 10, disableFadeOut: false,
    });
  }
}

function initTabAnimations() {
  const $ = (window as any).$;
  if (!$) return;
  $(document).on("click", ".nav-link", function () {
    if ($(".tab-pane").hasClass("active")) {
      $(".tab-pane").find(".port-img, .item, .pack-anim-col").addClass("animate__animated animate__zoomIn");
    }
  });
}
