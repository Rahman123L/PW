const app = gsap.timeline();

app.to('#star1', {
    duration: 3,
    opacity: 0,
    x: 170,
    y: 170,
    ease: "power1.inOut",
    repeat: -1
}, 0);

app.to('#star2', {
    duration: 3,
    opacity: 0,
    x: -150,
    y: 150,
    ease: "power1.inOut",
    repeat: -1
}, 0);

app.to('#star3', {
    duration: 3,
    opacity: 0,
    x: -80,
    y: 80,
    ease: "power1.inOut",
    repeat: -1
}, 0);