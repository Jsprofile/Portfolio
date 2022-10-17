if(window.innerWidth > 800){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}

if(window.innerWidth <= 800){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
    },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}