const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.25 });
tl.fromTo(".scroll-up", { opacity: 0 }, { opacity: 1, duration: 0.25 });
tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 0.25 });
tl.fromTo(".sticky", { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=1");

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function changeBg(){
  var topnav = document.getElementById('topnav');
  var scrollValue = window.scrollY;
  if(scrollValue < 150){
    topnav.classList.remove('bgColor');
  } else{
    topnav.classList.add('bgColor');
  }
}

window.addEventListener('scroll', changeBg);