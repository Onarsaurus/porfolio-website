"use strict";
$(document).ready( () => {

	// set event handler for nav a elements hover animation
    $("nav a").hover(
        evt => {
			const thumb = evt.currentTarget;
			$(thumb).stop(true).animate({ bottom: 5 }, "fast");

		},
		evt => {
			const thumb = evt.currentTarget;
			$(thumb).stop(true).animate({ bottom: 0 }, "fast");
		}

    );
    
	// set event handler for all .project h3 tags + -
    $(".project div h3").click( evt => {
        $(evt.currentTarget).toggleClass("minus");
        evt.preventDefault();
        $(evt.currentTarget).next().next().slideToggle(1000);
	});
    
});
