let menu=document.querySelector('.menu');
window.addEventListener('scroll', function(){
  let scrolling=this.scrollY
  if(scrolling>100){
    menu.classList.add('fixd_menu')
  }else{
    menu.classList.remove('fixd_menu')
  }
})

$('.main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<i class="fa-solid fa-angles-left prr"></i>',
    nextArrow: '<i class="fa-solid fa-angles-right nrr"></i>',
    dots: true,

  });
  $('.count').counterUp({
    delay: 10,
    time: 1000
});