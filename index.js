// it is use to make the scrolling smooting
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),     // choose main id, class
    smooth: true
});

// for nav, heading and footer animation
function firstAnimation() {
    console.log("firstAnimation");

    //gsap is use for animation
    var tl = gsap.timeline()
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })
        .to(".boundingelem", {
            y: 0,
            duration: 2,
            ease: Expo.easeInout,
            stagger: 0.2,
            delay: -1
        })
        .from(".herofooter", {
            y: -10,
            duration: 0,
            ease: Expo.easeInout,
            duration: 1.5,
            delay: -1
        })
}

// for mouse cursor on top
function circleMouse() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform =
            `translate(${dets.clientX}px, ${dets.clientY}px)`;       // for 
    })
}

firstAnimation()
circleMouse()

