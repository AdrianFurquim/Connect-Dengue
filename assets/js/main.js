document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// Quiz dengue no qual pode melhorar muito essta programacao porque esta bem ruim 03/05

function quiz(){

  pergunta1 = document.getElementsByName('per1');
  pergunta2 = document.getElementsByName('per2');
  pergunta3 = document.getElementsByName('per3');
  pergunta4 = document.getElementsByName('per4');
  pergunta5 = document.getElementsByName('per5');

  resQuiz = document.getElementById('resQuiz');

  let pontuacao = 0
  
  document.getElementById('correto1').style.background = 'rgba(115, 190, 115, 0.342)';
  document.getElementById('correto2').style.background = 'rgba(115, 190, 115, 0.342)';
  document.getElementById('correto3').style.background = 'rgba(115, 190, 115, 0.342)';
  document.getElementById('correto4').style.background = 'rgba(115, 190, 115, 0.342)';
  document.getElementById('correto5').style.background = 'rgba(115, 190, 115, 0.342)';
  

  if(pergunta1[0].checked){
      document.getElementById('errado-p1r1').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta1[2].checked){
      document.getElementById('errado-p1r2').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta1[3].checked){
      document.getElementById('errado-p1r3').style.background = 'rgba(219, 80, 80, 0.521)';
  }else{
      pontuacao++;
  }

  if(pergunta2[0].checked){
      document.getElementById('errado-p2r1').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta2[1].checked){
      document.getElementById('errado-p2r2').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta2[3].checked){
      document.getElementById('errado-p2r3').style.background = 'rgba(219, 80, 80, 0.521)';
  }else{
      pontuacao++;
  }

  if(pergunta3[0].checked){
      document.getElementById('errado-p3r1').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta3[2].checked){
      document.getElementById('errado-p3r2').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta3[3].checked){
      document.getElementById('errado-p3r3').style.background = 'rgba(219, 80, 80, 0.521)';
  }else{
      pontuacao++;
  }

  if(pergunta4[0].checked){
      document.getElementById('errado-p4r1').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta4[1].checked){
      document.getElementById('errado-p4r2').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta4[2].checked){
      document.getElementById('errado-p4r3').style.background = 'rgba(219, 80, 80, 0.521)';
  }else{
      pontuacao++;
  }

  if(pergunta5[0].checked){
      document.getElementById('errado-p5r1').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta5[1].checked){
      document.getElementById('errado-p5r2').style.background = 'rgba(219, 80, 80, 0.521)';
  }else if(pergunta5[3].checked){
      document.getElementById('errado-p5r3').style.background = 'rgba(219, 80, 80, 0.521)';
  }else{
      pontuacao++;
  }

  if(pontuacao >= 4){
      resQuiz.innerHTML = `<h1> ${pontuacao} de 5 </h1> <br> Parabéns, você foi perfeito!`;
  }else if(pontuacao == 3){
      resQuiz.innerHTML = `<h1> ${pontuacao} de 5 </h1> <br> Parabéns!`;
  }else{
      resQuiz.innerHTML = `<h1> ${pontuacao} de 5 </h1> <br> O que vale é o aprendizado, Parabéns`;
  }
}