const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl =  gsap.timeline({scrollTrigger: {
    trigger: "#part-2",
    start: "top 80%",
    end: "bottom 50%",
    // markers: true,
    scrub: 1,
}})

tl.to(".strip-l", {
    marginLeft: "0%",
}, "ac")

tl.to(".strip-r", {
    marginLeft: "-50%",
}, "ac")