
/*********************************************************************************/
/* Site JS                                                                      */
/*********************************************************************************/
$(document).ready(function() {

  // Set Fullscreen slideshow images
	$('#header').backstretch([
		"assets/images/dc1.jpg",
		"assets/images/legal.jpg",
		"assets/images/citroen.jpg",
    "assets/images/train.jpg"
		], {
			fade: 750,
			duration: 4000
		});

  //Fixed header on scroll
  $(window).scroll(function(){
     var scroll = $(window).scrollTop();
     var width =  $(window).width();
     var height = $(window).height();

     if (width > 768 && scroll > height) {
         $("#header #nav").addClass("fixed").slideDown(400);         
     } else if (width > 768 && scroll < height) {
         $("#header #nav").removeClass("fixed");
     }     
  });

  // Mix-it Up for sort order on "Lets Talk" SEction
  $('#lets_talk_container').mixItUp({
        load: {
        sort: 'postorder:asc'
      }, 
        selectors: {
        target: 'article'
      }
    });


});