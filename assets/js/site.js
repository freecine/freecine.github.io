
/*********************************************************************************/
/* Site JS                                                                      */
/*********************************************************************************/
$(document).ready(function() {

  // Set Fullscreen slideshow images
	$('#header').backstretch([
		"assets/images/slider_images/dc_flowers.jpg",
    "assets/images/slider_images/black_kids_africa.jpg",
		"assets/images/slider_images/business.jpg",
		"assets/images/slider_images/nyc_downtown_french_arch.jpg",
    "assets/images/slider_images/judge.jpg",
    "assets/images/slider_images/paris_at_night.jpg"
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

  // Mix-it Up for sort order on "Lets Talk" SEction
  $('#about_you_container').mixItUp({
        load: {
        sort: 'postorder:asc'
      },
      callbacks: {
          onMixEnd: function(state){
          var $last = state.$show.last();
          var $post_number = $last.attr('data-postorder');

          //Check if the last post is divible by 3. If not, then make "centered type". 
          if ($post_number % 3 != 0){
            state.$targets.removeClass('centered-client');
            $last.addClass('centered-client');

              // Checks to see if the preceding element is also not divisble by 3. If so then add centered type.
              var $second_last = $last.prev();
              var $second_last_count = $second_last.attr('data-postorder');
              
              if ($second_last_count % 3 != 0){
                $second_last.addClass('centered-client');
              }



          }

        } 
      }
    });

  
    /*********************************************************************************/
    /* Live Chat Settings                                                            */
    /*************************************** ******************************************/

    $('.contact_us').click(function(){
        $zopim(function() {
        $zopim.livechat.window.toggle();
      });
    });



});