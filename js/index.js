var tl = new TimelineLite();

tl.to(".display", 3.5, {backgroundPosition:"47% 60%",ease: Power0.easeNone})
.to(".display", 3.5, {backgroundSize:"225%",ease: Power3.easeIn}, "-=4")
.to(".display", 3.5, {backgroundPosition:"70% 100%", ease: Power0.easeNone}, "zoomout")
.to(".display", 3.5, {backgroundSize:"175%", ease: Power0.easeNone}, "zoomout")
.to(".display", 4, {backgroundSize:"160%", ease: Power0.easeNone}, "zoomout-2")
.to(".display", 4, {backgroundPosition:"5% 125%"}, "zoomout-2");
