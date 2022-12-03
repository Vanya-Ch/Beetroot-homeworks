let headerPagination = document.querySelector('.header-pagination')

let swiperHeader = new Swiper(".header__swiper", {
    direction: "vertical",
    pagination: {
      el: headerPagination,
      clickable: true,
    },
    loop:true,
  });
//headerPagination.style.right = "52px";
headerPagination.style.transform ="none";
headerPagination.style.top ="unset";


let newsPagination = document.querySelector('.swiper-news-pagination'),
    newsNext = document.querySelector('.swiper-news-next'),
    newsPrev = document.querySelector('.swiper-news-prev')

let swiperNews = new Swiper(".swiper-news", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: newsPagination,
      clickable: true,
    },
    navigation: {
      nextEl: newsNext,
      prevEl: newsPrev,
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
        
      },
      600:{
        slidesPerView:2,
      },
      1100:{
        slidesPerView:3,
      }
    }
});

newsPagination.style.bottom = "120px";
//newsNext.style.right = "115px";
//newsPrev.style.left = "115px"
newsPrev.style.top = "unset";
newsNext.style.top = "unset";

