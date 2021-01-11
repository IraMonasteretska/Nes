$(function () {

   /***  First-Slide ***/

   let currentSlide;
   let slidesCount;

   const updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $('.first-slider__counter--left').text("0" + currentSlide)
      $('.first-slider__counter--right').text("0" + slidesCount)
   };

   $('.first-slider').on('init', function (event, slick) {
      updateSliderCounter(slick);
   });

   $('.first-slider').on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
   });

   $('.first-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      asNavFor: '.first-slider__nav',
      responsive: [
         {
            breakpoint: 1140,
            settings: {
               arrows: false,
               infinite: true
            }
         }
      ]
   });

   $('.first-slider__nav').slick({
      slidesToShow: 3,
      asNavFor: '.first-slider',
      arrows: false,
      infinite: false,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 1140,
            settings: {
               infinite: true
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
            }
         }
      ]

   });

   $('.first-slider').on('afterChange', function (event, slick) {
      $('.first-slider__nav .slick-slide').removeClass('slick-current')
         .filter('[data-slick-index=' + slick.currentSlide + ']').addClass('slick-current');
   });


   /***  About-slide ***/

   $('.about-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      vertical: true,
      dots: false,
      verticalScrolling: true,
      verticalSwiping: true,
      infinite: false,
   });

   let currentSlide2;
   let slidesCount2;

   let changeSliderCounter = function (slick, currentIndex) {
      currentSlide2 = slick.slickCurrentSlide() + 1;
      slidesCount2 = slick.slideCount;
      $('.about-slider__counter--left').text("0" + currentSlide2)
      $('.about-slider__counter--right').text("0" + slidesCount2)
   };

   $('.about-slider').on('init', function (event, slick) {
      changeSliderCounter(slick);
   });

   $('.about-slider').on('afterChange', function (event, slick, currentSlide) {
      changeSliderCounter(slick, currentSlide);
   });

   // change img

   $('.about-slider').on('afterChange', function (event, slick, currentSlide) {
      changeImg2(slick, currentSlide);
   });

   let j = 0;
   $('.about-pictures__item').each(function (j, elem) {
      $(this).attr('data-img', j++);
   });

   let changeImg2 = function (slick, currentSlide) {
      $('.about-pictures__item').each(function (j, elem) {
         $(elem).removeClass('active');
         if ($(elem).data("img") == currentSlide) {
            $(elem).addClass('active');
         }
      });
   };

   /***  Blog-slide ***/

   $('.blog-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               variableWidth: false,
            }
         }
      ]
   });

   $('.blog-slider').on('afterChange', function (event, slick, currentSlide) {
      changeImg(slick, currentSlide);
   });

   let i = 0;
   $('.blog-slider__nav-item').each(function (i, elem) {
      $(this).attr('data-img', i++);
   });

   let changeImg = function (slick, currentSlide) {

      $('.blog-slider__nav-item').each(function (i, elem) {
         $(elem).removeClass('active');
         if ($(elem).data("img") == currentSlide) {
            $(elem).addClass('active');
         }
      });
   };


   let currentSlide3;
   let slidesCount3;

   let changeSliderCounter3 = function (slick, currentIndex) {
      currentSlide3 = slick.slickCurrentSlide() + 1;
      slidesCount3 = slick.slideCount;
      $('.blog-slider__counter--left').text("0" + currentSlide3)
      $('.blog-slider__counter--right').text("0" + slidesCount3)
   };

   $('.blog-slider').on('init', function (event, slick) {
      changeSliderCounter3(slick);
   });

   $('.blog-slider').on('afterChange', function (event, slick, currentSlide) {
      changeSliderCounter3(slick, currentSlide);
   });

   /***  Photo-slide ***/

   $('.photo-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               centerMode: false,
               variableWidth: false,
            }
         }
      ]
   });

   let currentSlide4;
   let slidesCount4;

   let changeSliderCounter4 = function (slick, currentIndex) {
      currentSlide4 = slick.slickCurrentSlide() + 1;
      slidesCount4 = slick.slideCount;
      $('.photo-slider__counter--left').text("0" + currentSlide4)
      $('.photo-slider__counter--right').text("0" + slidesCount4)
   };

   $('.photo-slider').on('init', function (event, slick) {
      changeSliderCounter4(slick);
   });

   $('.photo-slider').on('afterChange', function (event, slick, currentSlide) {
      changeSliderCounter4(slick, currentSlide);
   });


   $('.burger').click(function () {
      $('body').toggleClass('lock');
      $('.header-menu').toggleClass('active');
      $('.burger').toggleClass('active');
      $('.header-bottom__title').toggleClass('hidden');
   })




});
