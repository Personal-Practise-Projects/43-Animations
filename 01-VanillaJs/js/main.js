/**
 * GSAP Docs
 * @ref: https://greensock.com/docs/
 */
const timeline = new gsap.timeline({
	defaults: {
		duration: 1, // sets the default duration of each tween to 1s
		transformOrigin: "center", // sets default transform-origin to center
		ease: 'ease', // sets the default animation timeline to ease
	},
});

timeline.from("#bowl", {
	x: -190,
	opacity: 0,
})
.from("#sushi-01", {
	duration: 0.4,
	opacity: 0,
	y: '-=100',
	rotation: -70,
	ease: Bounce.easeOut
})
.from("#sushi-02", {
	duration: 0.4,
	opacity: 0,
	y: '-=100',
	rotation: 70,
	ease: Bounce.easeOut
}, '-=0.2')
.from("#chopstick-01", {
	duration: 0.4,
	y: -250,
	opacity: 0,
	rotation: 20,
}, "-=.4")
.from("#chopstick-02", {
	duration: 0.4,
	y: -250,
	opacity: 0,
	rotation: 0,
}, "-=.4")
.from("#bg-01", {
	x: -500,
	opacity: 0,
}, "-=1")
.from("#bg-02", {
	x: window.innerWidth,
	opacity: 0,
}, "-=1")
.from(".heading", {
	y: 200,
	opacity: 0,
});

/**
 * Scrollmagic Docs
 * @ref: http://scrollmagic.io/docs/index.html
 */
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
	triggerElement: ".sushi-animation",
	triggerHook: 'onLeave',
	duration: "100%"
})
.setPin(".sushi-animation")
.setTween(timeline)
.addTo(controller);
