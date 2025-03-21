document.addEventListener('DOMContentLoaded', function () {
  console.log('loading index.js file...');

  function toggleSlick() {
    const $slider = $('.image-text-sections');
    if (window.innerWidth < 768) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          arrows: false,
          slidesToShow: 1,
          adaptiveHeight: true,
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  toggleSlick();
  window.addEventListener('resize', toggleSlick);
});