var tl = new TimelineLite();

tl.to(".display", 1.5, {backgroundPosition:"47% 60%",ease: Power0.easeNone})
.to(".display", 1.5, {backgroundSize:"225%",ease: Power3.easeIn}, "-=1.5")
.to(".display", 1.5, {backgroundPosition:"70% 100%", ease: Power0.easeNone}, "zoomout")
.to(".display", 2.5, {backgroundSize:"175%", ease: Power0.easeNone}, "zoomout")
.to(".display", 3, {backgroundSize:"160%", ease: Power0.easeNone}, "zoomout-2")
.to(".display", 2.5, {backgroundPosition:"5% 125%"}, "zoomout-2")
.to(".craft-quote", 1, {opacity:1, ease: Power0.easeNone})
.to(".craft-quote", 1, {opacity:0}, "+=1")
.to(".display", 2, {backgroundPosition: "center", backgroundSize: "100%"}, "center")
.to(".super-text", 1, {opacity:1, ease: Power0.easeNone})
.to(".super-text", 1, {right:"25%"})
.to(".fresh-text", 1, {opacity:1, ease: Power0.easeNone});
