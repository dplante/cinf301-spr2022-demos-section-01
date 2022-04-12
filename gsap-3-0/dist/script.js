
                var rule = CSSRulePlugin.getRule("span:after");
                gsap.from('.anim1',{duration:1, opacity:0, y: -50, stagger: 0.6});
                gsap.from('img',{duration:5 ,opacity:0 ,y:30, delay:1.1 });
                gsap.to(rule,{cssRule: {scaleY:0},duration:1})
                gsap.from('aside',{duration:1 , opacity:0, backgroundPosition:'200px 0px', delay: 1.4 })
                

                /*var tl = gsap.timeline({defaults:{duration: 1}});
                tl.from(".anim1", {y:-50, stagger: .6, opacity: 0})
                  .to(rule, {duration: 1.8,cssRule: {scaleY: 0}}, "-=2.2")
                  .from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1.5")
                  .from("img", {y:30, opacity: 0}, "-=.5")
*/
               
