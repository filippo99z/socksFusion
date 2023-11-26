var tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});

tl.to("#scramble", {duration: 3, scrambleText:{text:"SocksFusionInnovation", chars:"lowerCase", revealDelay:0.5, tweenLength:false}})

GSDevTools.create({animation: tl, minimal: true});