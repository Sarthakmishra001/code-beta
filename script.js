Shery.mouseFollower({
    skew: true,
    duration: 1,
  });

Shery.makeMagnet("#nav2 a ,#nav3 button ");

Shery.textAnimate("#p1-heading h1",{
    style:1,
     y: 10,
    // delay: 1,
    duration: 0.2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
})


var tl1 = gsap.timeline();

tl1.from("#loader h2", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl1.to("#loader h2", {
  x: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  
});

tl1.to("#loader", {
  opacity: 0,
});


var elem=document.querySelectorAll("#right-elem")

elem.forEach(function(e){
    var image=e.childNodes[3]
    e.addEventListener("mouseenter",function(){
        image.style.opacity=1
        image.style.scale=1
    })
    e.addEventListener("mouseleave",function(){
        image.style.opacity=0
        image.style.scale=0
    })
    e.addEventListener("mousemove",function(dets){
        image.style.left=(dets.x-e.getBoundingClientRect().x)+"px"
        image.style.top=(dets.y-e.getBoundingClientRect().y)+"px"
    image.style.rotate=dets.x/50+"deg"
       })
})

var tl3 = gsap.timeline({
    scrollTrigger:{
       trigger:"#page3",
      scroller:"body",
      start:"top 90%",
      end:"top 15%",
//   markers:true,
     
    scrub:3,
    }
  })
  tl3
  .from("#box1text1  h3",{
    delay:2,
    opacity:0,
    stagger:1
  },"a")
.from("#prt1",{
    x:-200
},"b")
.from("#prt2",{
    delay:1.2,
    scale:0
},"c")



.from("#box2text1 h3",{
    delay:2,
    opacity:0,
    stagger:1
  },"a")
  .from("#prt3",{
    x:-200
},"b")
.from("#prt4",{
    delay:1.2,
    scale:0
},"c")



.from("#box3text1 h3",{
    delay:2,
    opacity:0,
    stagger:1
  })
  .from("#prt5",{
    x:-200
})
.from("#prt6",{
    delay:1,
    scale:0
})






var tl = gsap.timeline();
tl
 .from("nav",{
    opacity:0,
    y:-100,
    // stagger:1,
 })
 .from("#nav2 a",{
    opacity:0,
    y:-100,
    stagger:0.3,
 })
 .from("#vid1",{
    opacity:0,
    x:100,
 })
 .from("#vid2",{
    opacity:0,
    x:-100,
    delay:2,
 })
 .from("#p1-heading button",{
    opacity:0,
    x:100,
    delay:5,
 })