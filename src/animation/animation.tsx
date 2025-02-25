
import gsap from 'gsap'
import { useInview } from '../Hooks/useIntersection';
import Splitting from 'splitting'


export function scrollAnimate () {
    const {inView} = useInview()
    const h = document.querySelectorAll("[data-animation='header']");
    const p = document.querySelectorAll("[data-animation='para']");
    const f = document.querySelectorAll("[data-animation='fade']");
    const s = document.querySelectorAll("[data-animation='scale']");
    const sc = document.querySelectorAll("[data-animation='scale-para']");
    const b  = document.querySelectorAll("[data-animation='bounce']")

   
    h.forEach((item) => {
        Splitting({
            target :item,
            by : "chars"
        })
       
        
        gsap.set(item.querySelectorAll(".char"), {
            opacity : 0,
            yPercent: 100,
            transformStyle : "preserv-3d"
        })
        inView(item , {
            threshold : 1
        }).then(()=> {
            const ele = item.querySelectorAll(".char");
            gsap.to(ele, {
                opacity : 1,
                yPercent: 0,
                stagger : ele.length > 100 ? 0.02  : 0.01,
                duration :  ele.length > 100 ? 0.6  : 0.5,
                ease: "power3.inOut",
            })
        })

        
        
    })

    p.forEach((item) => {
      const lines =  Splitting({
            target : item,
            by : "lines"
        })
      
        lines.forEach((splitResult: any) => {
            const watchWrap = splitResult.words?.map((wordWrap: any) =>
                 `
                 <span class='word_wrap'>
                  ${wordWrap.outerHTML}
                 </span>
                 `
                ).join("")

                splitResult.el.innerHTML = watchWrap;
           })

           gsap.set(item.querySelectorAll(".word") , {
            opacity : 0,
             yPercent : 105,
             rotateX : 50,
             transformStyle : "preserve-3d"
         })
         inView(item , {
            threshold : 1
         }).then(()=> {
            const elem = item.querySelectorAll(".word")
            gsap.to(elem , {
              opacity : 1,
              yPercent : 0,
              rotateX : 0,
              stagger : elem.length > 100 ? 0.02 : 0.01,
              duration : elem.length > 100 ? 0.65 : 0.55,
              ease: "power3.inOut",
            })
         })
        
          
          
    })



    s.forEach((item) => {
        gsap.set(item , {
            opacity: 0,
            scale : 0.6,
            transformStyle : "preserve-3d"
        })
        inView(item , {
            threshold : 1
        }).then(() => {
            gsap.to(item , {
                opacity : 1,
                scale : 1,
                stagger : 0.3,
                ease: "power3.inOut",
                
            })
        })
    })
    
    f.forEach((item) => {
       
        gsap.set(item, {
            autoAlpha : 0,
            transformStyle : "preserv-3d"
        })
        inView(item , {
            threshold : 1
        }).then(()=> {
        
            gsap.to(item, {
                autoAlpha : 1,
                duration :  1,
                stagger: 0.03,
                ease: "power3.inOut",
            })
        })

        
        
    })

    sc.forEach((item) => { 
        Splitting({
            target: item,
            by: "chars" 
        });
    
        gsap.set(item.querySelectorAll(".char"), { 
            scale: 0.5, 
            opacity: 0 
        });
    
        inView(item, {
            threshold: 1
        }).then(() => {
            const ele = item.querySelectorAll(".char"); 
            gsap.to(ele, {
                scale: 1, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.inOut",
                stagger: 0.05 
            });
        });
    });

  
   b.forEach((item) => {
        // Initial state
        gsap.set(item, { opacity: 0, y: 50 });
      
        // Check if the element is in view
        inView(item, { threshold: 1 }).then(() => {
          // Fade in animation
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
      
      
          gsap.to(item, {
            y: -10, 
            repeat: -1, 
            yoyo: true, 
            duration: 0.6,
            ease: "power1.inOut",
            delay: 0.5, 
          });
        });
      });
      
    
}

