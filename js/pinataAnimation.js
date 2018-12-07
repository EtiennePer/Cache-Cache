/*
 * Permet d'animer la pinata pour permettre de la rendre
 * légèrement visible.
 */
$(function() {

  var discovered = false;
  var clicked = false;

  // When the button is hover (discover the pinata a little)
  $('.pinataHider').mouseover(function() {

    if (discovered == false) {
      discovered = true;
      var rd = Math.floor(Math.random() * 4);

      // Choose a random animation
      start_animations = {
        top: '50%',
        left: '50%',
        opacity: '0'
      };
      if (rd == 0) { // to top
        after_animations = {
          top: '48%',
          left: '50%',
          opacity: '1'
        };
      } else if (rd == 1) { // to bottom
        after_animations = {
          top: '52%',
          left: '50%',
          opacity: '1'
        };
      } else if (rd == 2) { // to left
        after_animations = {
          top: '50%',
          left: '30%',
          opacity: '1'
        };
      } else if (rd == 3) {
        after_animations = { // to right
          top: '50%',
          left: '70%',
          opacity: '1'
        };
      }

      $("#pinataImg").css(start_animations)
        .animate(after_animations, 800, function() {
          //callback
        });
    }
  });

  // If the little pinata is clicked
  $("#pinataImg").click(function() {
    if (clicked == false) {
      clicked = true;

      // Animate to grow up
      $(this).css({
          width: '2rem',
          height: '2rem',
          zIndex: '9999'
        })
        .animate({
          width: '10rem',
          height: '10rem',
          opacity: '1'
        }, 800, function() {
          //callback
          launchGame();
        });
    }
    else{
      var rd_x = Math.random() *  250;
      var rd_y = Math.random() *  250;
      var rd_plusormin = Math.floor(Math.random() * 2);

      var screenWidth = $(window).width();
      var screenHeight = $(window).height();

      var actual_top = $('#pinataImg').css('top');
      var actual_left = $('#pinataImg').css('left');

      console.log('rd_plusormin = ' + rd_plusormin);

      if(rd_plusormin == 0){
        var new_top = parseInt(actual_top) + rd_x;
        var new_left = parseInt(actual_left) + rd_y;
      }else {
        var new_top = parseInt(actual_top) - rd_x;
        var new_left = parseInt(actual_left) - rd_y;
      }

      // Check boundaries
      if(new_top <= 0 || new_top >= screenHeight){
        new_top = actual_top;
      }
      if(new_left <= 0 || new_left >= screenWidth){
        new_left = actual_left;
      }
      console.log('actual top = ' + actual_top);
      console.log('actual left = ' + actual_left);
      console.log('new top = ' + new_top);
      console.log('new left = ' + new_left);
      // Retrieve and change pinata's style
      $('#pinataImg').animate({
          top: new_top,
          left: new_left,
          opacity: '1'
        }, 800, function() {
        });
    }
  });
});
