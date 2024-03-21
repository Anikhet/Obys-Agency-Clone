function loading(){

var timer = document.querySelector("#timer h5")
var grow = 0 
setInterval(() => {
    if (grow < 101){
        timer.innerHTML = grow++
    }
}, 45);


var tl = gsap.timeline()


tl.from(".line h1",{
    y:200,
    opacity:0,
    stagger:0.3,
    duration:0.6,
    delay:0.4
})

tl.from("#timer h5,#timer h6",{
    opacity:0,
    duration:2,
  
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
  
    
})

tl.to("#timer h5,#timer h6,.line h2,.line h1",{
    opacity:0,
    duration:0.8,
    delay:1.5
})


tl.to('.loader',{
    display:'none',
    duration:0.4,
    delay:0.5,

})

tl.from('#page1',{
    y:1600,
    opacity:0,
    duration:0.6,
    ease:Power4
})


tl.from("#nav",{
    opacity:0,
    delay:0.2
})

tl.from(".hero h1,#hero2 h1,#hero3 h2,#hero4",{
    y:150,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

}
loading()


// document.addEventListener("mousemove",function(details){
//     // console.log("hello")
//     gsap.to("#crsr",{
//         left:details.x,
//         top:details.y
//     })

// })
Shery.mouseFollower();
Shery.makeMagnet("#nav2 h4,#ob" /* Element to target.*/,{});