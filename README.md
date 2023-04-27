# rsponsive-slider
here is the responsive and touchable slider created by swiper slider

firs thing we should do is past the css link in the line blow in the head section
```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
```
then we also linking our javascript right before body tag
```html
   <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
```
**there is no need to link jquery**

the next to thing we shoud do is creating the file name slider to write our js codes for slider for control our options (you can use your favorit name)
write after he befor js link we add this code

```html
 <script src="js/slider.js"></script>
```

after that in header section we write our html for slider

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

then we going in js folder in the slider.js file and write this code for slider options
((  centeredSlides: true should remove in order to slider working better

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

there is some css that need to our slider working write and more beauty

```css
/* slider css */
.swiper {
  height: 300px;
  padding: 1px;
}

img {
  width: 100%;
  height: 100%;
}
.swiper img {
  background-size: cover;
}

.swiper-button-prev , .swiper-button-next {
  color: #0000009e;
  font-size: 10px !important;
}
.swiper-pagination-bullet-active{
  background: #0000009e;
}
/* end slider css */
```




