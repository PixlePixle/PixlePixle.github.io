import anime from './js/lib/anime.es.js';

anime({
    targets: '.text',
    keyframes: [
        {opacity: [0, 0.86], duration: 750, easing: 'linear'},
        {translateY: '-7vh', delay: 50}
    ],    
    duration: 1000,
    easing: 'easeInOutCubic'
});

anime({
    targets: '.button',
    keyframes: [
        {opacity: 0},
        {translateY: '-7vh', translateX: '-5vw'},
        {translateX: 0, opacity: [0,0.86], duration: 1250, delay: 1250}

    ],
    duration: 0
});

var Card = anime({
    targets: '.card',
    keyframes: [
        {opacity: 0},
        {translateX: '-6', translateY: '0'},
        {translateX: 0, translateY: 0, opacity: [0,1], duration: 500, easing: "easeInOutSine", delay: anime.stagger(100)}
    ],
    autoplay: false,
    duration: 0
});




if ('IntersectionObserver' in window) {
    console.log("Your browser supports IntersectionObserver");
} else {
    Cards.play();
}

const targets = document.querySelectorAll(".card");

const lazyLoad = (target)=>{
  const io = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
              Card.play();
              observer.disconnect();
          }
      })
  },{threshold:[0.7]});

  io.observe(target);
}
targets.forEach(lazyLoad);
