function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();


  function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
    }) 
        .to(".boundingelem", {
            y: 0,   
            duration: 2,
            delay: -1.4,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .from(".imagediv", {
          y: 10,
          opacity: 0,
          duration: 1.5,
          delay: -1,       
          ease: Expo.easeInOut,
          stagger: .2
      })
  }
  
  firstPageAnim();





var tl1 =  gsap.timeline({scrollTrigger: {
    trigger: "#part-2",
    start: "top 50%",
    end: "bottom 90%",
    // markers: true,
    scrub: 1,
}})



tl1.to(".strip-l", {
    marginLeft: "0%",
}, "ac")

tl1.to(".strip-r", {
    marginLeft: "-50%",
}, "ac")

