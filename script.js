function first(){
    var tl=gsap.timeline(
        {
            scrollTrigger:{
                trigger:"#home",
                start:"top top",
                pin:true,
           
               // markers:true,
                scrub:1
                }
            
        });
        
        tl.to("#circle",{
            scale:.2,
            ease:Power1
        },"a")
        tl.to("#circle #btm img",{
            rotate:"-180deg",
            ease:Power1,
            stagger:.02
        
        },"a")
        tl.to(" #smlcircle",{
            scale:.6,
            ease:Power1
        },"a")
        
        tl.to("#overlay #purpal",{
            top:"50%",
            scale:2,
            ease:Power1
        },"a")
        
        tl.to("#overlay #centerImg #imagediv",{
            scale:0,
            stagger:1,
         ease:Power1
           },"a")
           tl.to("#overlay #centerImg span",{
        
              opacity:0,
             ease:Power1
           },"a")
         
        
        tl.to("#overlay span",{
            top:"120%",
            stagger:.02,
            ease:Power1
        },"a")
        tl.to("#overlay #pink",{
            bottom:"5%",
            rotate:"0",
            delay:-.3,
            ease:Power1,
            
        },"b")
        tl.to("#smlcircle, #circle",{
            scale:0,
          ease:Power1
        },"b")
        tl.to(" #purpal",{
            opacity:0,
            ease:Power1
        },"b")
        tl.to("#imgcontainer img",{
            scale:1.5,
            
         ease:Power0
           },"a")
        
           tl.to("#imgcontainer img",{
            scale:1,
            
         ease:Power0
           },"b")
           tl.to("#sndpurpal",{
            top:"0%",
            delay:.2,
            ease:Power1
        },"b")
        tl.to("#sndpurpal",{
            top:"-100%",
            delay:1,
            ease:Power1
        },"b")
      

}
function second(){
        var tl2=gsap.timeline(
            {
                scrollTrigger:{
                    trigger:"#second",
                    start:"top top",
                    pin:true,
                    end: "+=" + (window.innerHeight * 7),
         
        
        
                   // markers:true,
                    scrub:1
                    }
                
            });
           
            
        
        tl2.to(".circle",{
            top:"50%",
            scale:1.5,
             stagger:.2,
            ease:Power1
        })
        tl2.to(".circle",{
            left:"50%",
            ease:Power1
        })
        
         tl2.to(".circle ",{
            scale:1,
            ease:Power1
        })
        tl2.to(".circle  ",{
            scale:10,
            ease:Power1
        })
        tl2.to(".circle ",{
            height:"100%",
            background:` linear-gradient(to right, #D5A7B4, #B4AAD5)`,
            ease:Power1
        },"a")
        
        
        tl2.to(" #stop h1",{
            x:"-260%",
            duration:1.5,
            delay:-.8,
            ease:Power0
        },"a ")
         tl2.to(".number h3:nth-child(1)  ",{
            y:"-200%",
            delay:-.3,
    
            duration:1,
         ease:Power0
              },"a")
       
       
         tl2.to(".number h3:nth-child(2)  ",{
             y:"-210%",
             duration:1.5,
             delay:-.3,
             ease:Power0
              },"a")
              tl2.to(".number h3:nth-child(3)  ",{
                y:"-210%",
                duration:1,
        
                delay:.1,
    
                ease:Power0
                 },"a")
          
        tl2.to("#text h3:nth-child(1)",{
            opacity:0,
            delay:-.09,
            duration:.5,
         ease:Power0
             },"a")
             tl2.to("#text h3:nth-child(2)",{
                opacity:1,
                delay:.2,
                duration:.5,
                      ease:Power0
                 },"a")
                       
         tl2.to(".a",{
            height:"100%",
            stagger:.1,
            ease:Power0
         },"b")
         tl2.to(".b",{
        width: "50%",
        
          ease:Power0
         },"c")
         tl2.to(".c",{
            width: "80%",
            
         ease:Power0
             },"c")

             
       
    }
         function third(){
            var tl3= gsap.timeline({
                scrollTrigger:{
                    trigger:"#third",
                    start:"top top",
                   // markers:true,
                    pin:`#third-overlay`,
         
                    // pin:true,
                    // end:"+=" + (window.innerHeight * 7),
                    // end:"50%",
                    scrub:2,
            }
        });
        tl3
        .to("#third",{
            top:"-300%",
            stagger:1,
            ease:Power1
        },"a")
        .to("#bottom-img",{
            delay:.3,

            ease:Power1,
            rotation:"360",
            repeat:1
        },"a")
        .to("#panel-text",{
            delay:-.5,

            left:"-100%",
            ease:Power1,
            repeat:1
        },"b")
        .to("#side",{
            left:"150%",
            delay:-.5,
            duration:3,
            ease:Power1
        },"b")
        .to("#ps",{
            delay:.1,
            left:"50%",
            ease:Power1
        },"b")
        .to("#yf",{
            delay:.1,
            left:"50%",
            ease:Power1
        },"b")
        .to("#ak",{
            delay:.1,
            left:"50%",
            ease:Power1
        },"b")
        .to("#btm-bar",{
        
            delay:1,
            left:"-40%",
            ease:Power1
        },"b")
        .to("#picture",{
            delay:1,
            top:"80%",
            ease:Power1
        },"b")
        .to("#smll-img2",{
            delay:1,
            top:"80%",
            ease:Power1
        },"b")
        
        .to("#half-circle",{
            ease:Power1,
            scale:2.5,
            delay:1.5,
 
         
            },"b")
        
 
        
        }
        window.addEventListener("DOMContentLoaded",function(){
            first();
            second();
            third();
        })
      