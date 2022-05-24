const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const contnue = document.querySelector('.contnue');
const textContnue = contnue.querySelector('h1');
const textIntro = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1')

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 22250,
    triggerElement: intro,
    triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//text animation
const textAnim =TweenMax.fromTo(textIntro,3,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement: intro,
    triggerHook:0
})
.setTween(textAnim)
.addTo(controller);

//scen3

const textThree =TweenMax.fromTo(textContnue,3,{opacity:1},{opacity:0});

let scene3 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement: contnue,
    triggerHook:0
})
.setTween(textThree)
.addTo(controller);

//Video animation

let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => { //could do in vanilla js using event listener on scroll
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos - delay )* accelamount;
    video.currentTime = delay;
    console.log(delay);
}, 33.3) //this is 1000/framerate