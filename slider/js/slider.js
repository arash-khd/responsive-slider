var media_query;
if(window.matchMedia("(min-width: 769px)").matches){

   media_query =3;

}
else {
 media_query =1;
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: media_query,
  spaceBetween: 5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});