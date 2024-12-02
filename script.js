const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const line = gsap.utils.toArray(".section line");

const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      console.log (entry)
      if (entry.isIntersecting) {
          entry.target.classList.add ('show');
      } 
      else {
              entry.target.classList.remove('show');
              
           }

  }) ;
  }) ;
  const hiddenElements = document.querySelectorAll('.hidden');

  hiddenElements.forEach((el) => observer.observe(el));

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    start: "top top",
    end: `+=${sections.length * window.innerWidth*1.5}`,
    snap: 0.1 / (sections.length + 10),
    markers: {startColor: "white", endColor: "white", fontSize: "0px", fontWeight: "bold", indent: 20},
    invalidateOnRefresh: true, 
    toggleActions: "play reverse play reverse"  
  }
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");
  if(text.length === 0)  return 
  gsap.from(text, {
    y: -100,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      markers: false
    }
  });
});

const container2 = document.querySelector(".wrapper2 .container2");
const sections2 = gsap.utils.toArray(".wrapper2 .container2 section");

let scrollTween2 = gsap.to(sections2, {
    xPercent: -100 * (sections2.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".wrapper2 .container2",
        pin: true,
        scrub: 1,
        start: "top top",
        end: `+=${sections2.length * window.innerWidth*1.5}`,
        snap: 0.1 / (sections2.length + 10),
        markers: { startColor: "green", endColor: "green", fontSize: "0px" },
        invalidateOnRefresh: true, 
        toggleActions: "play reverse play reverse"  
    }
});

sections2.forEach((section) => {
    let text = section.querySelectorAll(".anim");
    if (text.length === 0) return;
    gsap.from(text, {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween2,
            start: "left center",
            markers: false
        }
    });
});



const image = document.querySelector('.zoom');

window.addEventListener('wheel', function(event) {
  let scale = 1; 
  if (event.deltaY < 0) {
    scale -= 1; 
  } else {
    scale += 1;
  }

  scale = Math.min(Math.max(scale, 1), 3);
  image.style.transform = `scale(${scale})`;
});

