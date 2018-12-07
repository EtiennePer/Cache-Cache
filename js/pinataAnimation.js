/*
 * Permet d'animer la pinata pour permettre de la rendre
 * légèrement visible.
 */
$(function() {

  var discovered = false;
  var clicked = false;

  $('#testSvg').click(function(){
    console.log('test');
  });
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
          height: '10rem'
        }, 800, function() {
          //callback
        });
    }
  });
});
