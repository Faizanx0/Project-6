var t=gsap.timeline();

gsap.from("nav h3",{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
    
})


t.from("#center h1",{
    x:-200,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.3,
    color:"cyan"
})

t.from("img",{
    x:100,
    rotate:50,
    duration:0.5,
    opacity:0,
    stagger:0.5
})

gsap.from("#footer h3",{
    y:10,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3
})
