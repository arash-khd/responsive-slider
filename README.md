# responsive-slider
here is the rsponsive and touchable slider created by swiper slider

firs thing we should do is past the css link line blow in the head section
```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
```
then we linking our script before body tag
```html
   <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
```
**there is no need to link jquery**

the next to thing we shoud do is creating the file name slider,js in js folder like always (you can use your favorit name)

```html
 <script src="js/slider.js"></script>
```

after header section we write down our html

```html
    <section class="slider">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="img/1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="img/2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="img/3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="img/4.jpg" alt="">
              </div>
     
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
          </div>
    </section>
```

then we going in js folder in the slider.js file and write this code

**some additional codes added in order to slider working great in all screen and sizes**
**the slider is 3 section in screen sizes bigger than 769px (pc size) and is 1 section in screen sizes with lesser than 769px (mobile size)

```js
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
```




