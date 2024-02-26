let tl = gsap.timeline()

tl.to(".green", { x: 600, duration: 2 });
tl.to(".purple", { x: 600, duration: 1, delay: 1 });
tl.to(".orange", { x: 600, duration: 1 });