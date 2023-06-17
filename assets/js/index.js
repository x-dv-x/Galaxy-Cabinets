document.addEventListener('DOMContentLoaded', function() {
  const orderbtn = document.getElementById('order-btn');
  orderbtn.addEventListener('click', function() {
    const ordersection = document.getElementById('order');
    ordersection.scrollIntoView({behavior: "smooth"});
  });
});

document.addEventListener('DOMContentLoaded', function() {
const worksbtn = document.getElementById('works');
worksbtn.addEventListener('click',function(){
  const worksection = document.getElementById('quote');
  worksection.scrollIntoView({behavior: "smooth"});
})
}); 

$(document).ready(function() {
  $('.testimonial-slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 600,
      draggable: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
          }
      ]
  });
});
