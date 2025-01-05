const menuAnimation = () => {
  let tl = gsap.timeline();
  let crose = document.querySelector(".ri-close-line");
  let menuBtn = document.querySelector(".menu-icon");
  tl.to(".menu", {
    right: 0,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from(".menu li", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });
  tl.from(crose, {
    x: 20,
    opacity: 0,
  });

  tl.pause();
  menuBtn.addEventListener("click", () => {
    gsap.to(menuBtn, {
      opacity: 0,
    });
    tl.play();
  });
  crose.addEventListener("click", () => {
    gsap.to(menuBtn, {
      opacity: 1,
      delay: 3,
    });
    tl.reverse();
  });
};
menuAnimation();

const section1 = () => {
  let tl1 = gsap.timeline()
  tl1.from("nav h1,nav i", {
    y: -30,
    opacity: 0,
    delay:0.7,
    duration:0.8
  },"r");

  tl1.from(".left button",{
    scale:0,
    opacity:0,  delay:0.7,
    duration:0.8
   
  },"r")
  tl1.from(".left h1", {
    x: -50,
    opacity: 0,  delay:0.7,
    duration:0.8  
    
  },"r");
  tl1.from(".right img", {
    x: 50,
    opacity: 0,  delay:0.7,
    duration:0.8

  },"r");
};
section1();

const section2 = () => {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Section-part2",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 10%",
      scrub: 2,
    },
  });
  tl2.from(
    ".first-box img, .sec-box img",
    {
      x: -50,
      opacity: 0,
      // duration: 0.6,
    },
    "d"
  );
  tl2.from(
    ".food-name h1, .food-name p",
    {
      y: 100,
      opacity: 0,
    },
    "d"
  );
  tl2.from(
    ".third-box h1, .third-box p",
    {
      x: 100,
      opacity: 0,
      stagger: 0.2,
    },
    "d"
  );
};
section2();

const section3 = () => {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Section-part3",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 10%",
      scrub: 2,
    },
  });
  tl3.from(
    ".left-container h1, .left-container p",
    {
      x: -50,
      opacity: 0,
      stagger: 0.2,
    },
    "e"
  );
  tl3.from(
    ".right-container img",
    {
      scale: 0.5,
      opacity: 0,
    },
    "e"
  );
};
section3();

const section4 =()=>{
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Section-part4",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 0%",
      scrub: 2,
    },
  });
  
  tl4.from(
    ".test-text h2,.test-text p",
    {
      y: 40,
      opacity: 0,
    },
    "p"
  );
  tl4.from(
    ".food-box1 img, .food-box2 img",
    {
      scale: 0,
      opacity: 0,
      rotate: 180,
      
    },
    "p"
  );
  tl4.from(".food-info h2, .food-info p",{
    y: 150,
    opacity:0
  },"p")
  tl4.from(".egg-detail p",{
    x : 50,
    opacity:0,
    scale : 0.5,
  },"p")
  tl4.from(".sec-food-box-Details img",{
    x : 150,
    scale: 0.2,
    rotate : 180,
    opacity:0
  },"p")
  
  tl4.from(".phone-menu i",{
    y: -30,
    opacity: 0,
  },"p")
  
  tl4.from(".phone2 img",{
  opacity:0,
    ease: "bounce.out",
    y: -50,
  },"p")
  
  tl4.from(".sec-egg-detail h1, .sec-egg-detail p",{
    scale:0,
    opacity:0
  },"p")
  
  tl4.from(".add-to-cart button",{
    scale:0,
    opacity:0
  },"p")
  
  tl4.from(".app h1, .app p",{
    x: 100,
    opacity:0
  },"p")
  tl4.from(".app-img img",{
    scale:0,
    opacity:0
  },"p")
}
section4();
const footerAnimation = ()=>{
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-container",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 0%",
      scrub: 2,
    },
  })
  
  tl5.from(".footer-container h1, .footer-container p,.line",{
    y:30 ,
    opacity:0,
    stagger: 0.1
  },"k")
  tl5.from(".footer-container button",{
    scale:0.5,
    opacity:0
  },"k")
}
footerAnimation();