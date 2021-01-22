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
      infinite: true,
      autoplay: false,
      speed: 1000,
      asNavFor: '.first-slider__nav',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
            }
         },
         {
            breakpoint: 576,
            settings: {
               arrows: false,
               dots: true
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
      responsive: [
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               variableWidth: false,
               arrows: false,
            }
         }
      ]
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

   /***  Blog-slider ***/

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
               arrows: false,
            }
         }
      ]
   });

   let blogPictures = $('.blog-slider__nav-item');

   function showPicture(elem) {
      $(blogPictures).removeClass('active');
      $(elem).addClass('active');
   }

   let i = 0;
   setInterval(function () {
      let elem = blogPictures[i++];
      showPicture(elem)
      if (i >= blogPictures.length) i = 0;
   }, 2000);


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
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      variableWidth: true,
      initialSlide: 1,
      arrows: false,
      infinite: false,
      responsive: [
         {
            breakpoint: 768,
            settings: "unslick"
         }
      ]
   });

   let photo1 = $('.vent-slider__item');
   let photo2 = $('.pump-slider__item');
   let photo3 = $('.other-slider__item');
   let all1 = photo1.length;
   let all2 = photo2.length;
   let all3 = photo3.length;

   $('.vent-slider__counter--right').text("0" + all1)
   $('.pump-slider__counter--right').text("0" + all2)
   $('.other-slider__counter--right').text("0" + all3)

   let u1 = 0;
   let u2 = 0;
   let u3 = 0;

   $('.vent-slider__down').click(function () {
      u1--;
      if (u1 < 0) u1 = all1 - 1;
      $(photo1).removeClass('active');
      $(photo1[u1]).toggleClass('active');
   })

   $('.pump-slider__down').click(function () {
      u2--;
      if (u2 < 0) u2 = all2 - 1;
      $(photo2).removeClass('active');
      $(photo2[u2]).toggleClass('active');
   })

   $('.other-slider__down').click(function () {
      u3--;
      if (u3 < 0) u3 = all3 - 1;
      $(photo3).removeClass('active');
      $(photo3[u3]).toggleClass('active');
   })


   $('.vent-slider__up').click(function () {
      u1++;
      if (u1 >= all1) u1 = 0;
      $(photo1).removeClass('active');
      $(photo1[u1]).toggleClass('active');
   })

   $('.pump-slider__up').click(function () {
      u2++;
      if (u2 >= all2) u2 = 0;
      $(photo2).removeClass('active');
      $(photo2[u2]).toggleClass('active');
   })

   $('.other-slider__up').click(function () {
      u3++;
      if (u3 >= all3) u3 = 0;
      $(photo3).removeClass('active');
      $(photo3[u3]).toggleClass('active');
   })


   $('.vent-slider__up').click(function () {
      ventChangeSlide(u1 + 1, all1);
   });

   $('.vent-slider__down').click(function () {
      ventChangeSlide(u1 + 1, all1);
   });

   $('.pump-slider__up').click(function () {
      pumpChangeSlide(u2 + 1, all2);
   });

   $('.pump-slider__down').click(function () {
      pumpChangeSlide(u2 + 1, all2);
   });

   $('.other-slider__up').click(function () {
      otherChangeSlide(u3 + 1, all3);
   });

   $('.other-slider__down').click(function () {
      otherChangeSlide(u3 + 1, all3);
   });

   let ventChangeSlide = function (u1, all1) {
      $('.vent-slider__counter--left').text("0" + u1)
      $('.vent-slider__counter--right').text("0" + all1)
   };

   let pumpChangeSlide = function (u2, all2) {
      $('.pump-slider__counter--left').text("0" + u2)
      $('.pump-slider__counter--right').text("0" + all2)
   };

   let otherChangeSlide = function (u3, all3) {
      $('.other-slider__counter--left').text("0" + u3)
      $('.other-slider__counter--right').text("0" + all3)
   };


   /* Header Burger */


   $('.burger__wrap').click(function () {
      $('body').toggleClass('lock');
      $('.header-menu').toggleClass('active');
      $('.burger').toggleClass('active');
      $('.header-bottom__title').toggleClass('hidden');
   })

   /* Card Tile */

   $('.icons__btn').click(function () {
      $('.icons__btn').removeClass('active');
      $(this).toggleClass('active');
   })


   /* Card product */

   $('.card__more').click(function () {
      $(this).toggleClass("active");
      if ($(this).prev('.card-list').hasClass('active')) {
         $(this).prev('.card-list').removeClass("active");
      } else {
         setTimeout(() => {
            $(this).prev('.card-list').addClass("active");
         }, 300);
      }
      $(this).closest('.card__bottom').prev().slideToggle();
   })


   /*  Page Category */

   let currentSlide5;
   let slidesCount5;

   const updateSliderCounter5 = function (slick, currentIndex) {
      currentSlide5 = slick.slickCurrentSlide() + 1;
      slidesCount5 = slick.slideCount;
      $('.category-mini__counter--left').text("0" + currentSlide5)
      $('.category-mini__counter--right').text("0" + slidesCount5)
   };

   $('.category-mini').on('init', function (event, slick) {
      updateSliderCounter5(slick);
   });

   $('.category-mini').on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter5(slick, currentSlide);
   });

   $('.category-mini').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      dots: false,
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
            }
         }
      ]

   });

   $('.products-filter__top').click(function () {
      $(this).next('.products-filter__bottom').slideToggle();
      $(this).closest('.products-filter').toggleClass('products-filter--open');
   })

   $('.products-price__top').click(function () {
      $(this).next('.products-filter__bottom').slideToggle();
      $(this).closest('.products-price').toggleClass('products-filter--open');
   })

   /* tabs cabinet */

   $('.tabs__item').click(function () {
      $('.tabs__item').removeClass("active");
      $(this).addClass('active');
      var href = $(this).attr('href');
      $('.tab-pane').removeClass('active').removeClass('in');
      $(href).addClass('active');
      setTimeout(function () {
         $(href).addClass('in');
      }, 100);
      return false;
   })

   /* ordering radio */

   $('.ordering-radio').click(function () {
      if ($('.radio__input[name="radio"][value="2"]').is(':checked')) {
         $('.ordering-left__another').addClass('active');
      } else {
         $('.ordering-left__another').removeClass('active');
      }
   });

   /* Ordering */
   let count = $('.goods').length;
   $('.goods-remove').click(function () {
      $(this).closest('.goods').slideUp(500);
      count--;
      $('.ordering-right__count').text(count);
   });

   /* Cart hover */

   $('.cart-hover').mouseenter(function () {
      $('.cart-hidden').slideDown();
      $('.ordering-right__close').click(function () {
         $('.cart-hidden').slideUp();
      });
   })

   $('.cart-hover').mouseleave(function () {
      $('.cart-hidden').slideUp();
   });


   /* About-us slider */
   $('.about-us__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
         {
            breakpoint: 576,
            settings: {
               arrows: false
            }
         }
      ]
   });

   let currentSlide6;
   let slidesCount6;

   const updateSliderCounter6 = function (slick, currentIndex) {
      currentSlide6 = slick.slickCurrentSlide() + 1;
      slidesCount6 = slick.slideCount;
      $('.about-us__slider-counter--left').text("0" + currentSlide6)
      $('.about-us__slider-counter--right').text("0" + slidesCount6)
   };

   $('.about-us__slider').on('init', function (event, slick) {
      updateSliderCounter6(slick);
   });

   $('.about-us__slider').on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter6(slick, currentSlide);
   });


   /* Portfolio slider */

   let currentSlide7;
   let slidesCount7;

   const updateSliderCounter7 = function (slick, currentIndex) {
      currentSlide7 = slick.slickCurrentSlide() + 1;
      slidesCount7 = slick.slideCount;
      $('.portfolio-slider__counter--left').text("0" + currentSlide7)
      $('.portfolio-slider__counter--right').text("0" + slidesCount7)
   };

   $('.portfolio-slider').on('init', function (event, slick) {
      updateSliderCounter7(slick);
   });

   $('.portfolio-slider').on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter7(slick, currentSlide);
   });

   $('.portfolio-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      dots: false,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
            }
         }
      ]

   });


   /* about-us sticky */

   $('.sticky-list__item').click(function () {
      $('.sticky-list__item').removeClass('active');
      $(this).addClass('active');
   });




});
