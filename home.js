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

