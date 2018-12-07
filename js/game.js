
var pinatas = [];

function launchGame(){
    var imgPinata = document.getElementById("pinataImg");
    pinatas.push(imgPinata);
    while(pinatas.length!=0){
        move(imgPinata)
        pinatas.splice(0, 1)
    }
}

function move(imgPinata){
    // var newStyle = 'transform: translate3d('++'px,'
    //   + Math.random() * 100 +'px,0px);';
    //   + 'transform:rotate('+Math.random() * 360+'deg);'
    //   + 'display: inline-block; opacity: 1;'
    // imgPinata.setAttribute('style',newStyle);

    // Select a random value to moove the pinata
    var rd_x = Math.random() *  50;
    var rd_y = Math.random() *  50;
    var rd_plusormin = Math.random() *  2;

    var actual_top = $('#pinataImg').css('top');
    var actual_left = $('#pinataImg').css('left');

    if(rd_plusormin == 0){
      var new_top = actual_top + rd_x;
      var new_left = actual_left + rd_y;
    }
    else{
      var new_top = actual_top - rd_x;
      var new_left = actual_left - rd_y;
    }

    // Retrieve and change pinata's style
    $('#pinataImg').animate({
        top: new_top + '%',
        left: new_left + '%',
        opacity: '1'
      }, 800, function() {
      });
}
