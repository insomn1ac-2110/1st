//Hiệu ứng scroll mượt
$('nav a').click(function(e) {
	e.preventDefault();
  
	var target = $(this).attr('href');
  
	$('html, body').animate({
	  scrollTop: $(target).offset().top
	}, 1000);
  });

//Hiệu ứng chuyển banner
function bannerSwitcher() {
      next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
      if (next.length) next.prop('checked', true);
      else $('.sec-1-input').first().prop('checked', true);
    }

    var bannerTimer = setInterval(bannerSwitcher, 5000);

    $('nav .controls label').click(function() {
      clearInterval(bannerTimer);
      bannerTimer = setInterval(bannerSwitcher, 5000)
});

//Card swapper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

//Check in success alert
document.getElementById('check-in-form').onsubmit = function(event) {
  event.preventDefault();
  alert('Check-in thành công');
}
