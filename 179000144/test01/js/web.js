var banner = new Swiper('.page-banner', {
    autoplay: true,
    loop: true,
    clickable: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
/*鼠标移入停止轮播，鼠标离开 继续轮播*/
$(".page-banner").mouseenter(function () {
    banner.autoplay.stop();
}).mouseleave(function () {
    banner.autoplay.start();
});

var swiper = new Swiper('.index-swiper .swiper-container', {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000
    },
});
/*鼠标移入停止轮播，鼠标离开 继续轮播*/
$(".index-swiper .swiper-container").mouseenter(function () {
    swiper.autoplay.stop();
}).mouseleave(function () {
    swiper.autoplay.start();
});
