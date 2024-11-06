

//underocean sound
// start function toggle Audio
function toggleAudio(){
  const audio = document.getElementById('audio');  //target audio placed in html
  const switchElement = document.getElementById('audioSwitch'); //target audio switch

  if (switchElement.checked){
      audio.play(); //to play audio
  } else {
      audio.pause(); //to switch off audio
  }
}

document.getElementById('audioSwitch').addEventListener('sl-change', toggleAudio);


///slider testing///
///Zone 1 slider - from https://splidejs.com/

document.addEventListener('DOMContentLoaded', function(){ 
  // To select all elements with '.splide' class
  const splideElements = document.querySelectorAll('.splide'); //target all splide carousel

splideElements.forEach(function (element) {
  const splide = new Splide(element, {
    width: '50%',
      start: 3,
      perPage: 3,
      focus: 'center',
      type: 'loop',
      snap: true,
      autoplay: true,
      interval: 2000,
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 1,
        },
      },
    });

    splide.mount();
  });
});


//scroll animation
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
      console.log(entry);
      if (entry.isIntersecting){
          entry.target.classList.add('show');
          console.log('element visible');
      } else {
          entry.target.classList.remove('show');
          console.log('element not visible');
      }
  });
}, {
  threshold: 0.1,// when 10% of element is visible 
  focus:'center', // to position the viewpoint in the center
  start:'top center', 
  end:'bottom'
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(function (el) {
  observer.observe(el);
});


// overview section : fade animation as you scroll scroll Trigger gsap
//set timeline
const tlFeatures = gsap.timeline({ //tl- stands for timeline and give more control 

  scrollTrigger: {
      trigger:'.feature-section', // to make sure that the feature section is targeted
      scrub:true,
  }
}); 

tlFeatures.from('.feature',{
  y:-200,
  opacity:0,
  duration:3,
  ease:"power4.out",
  stagger:0.2
}); 
         
