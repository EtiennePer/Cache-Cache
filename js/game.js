
var pinatas = [];
var wavecounter = 0;
var id = 2;

function launchGame(){
  var t = new Timer(document.getElementById('loader'), document.getElementById('border'), "tim", 3000);

  var maPinata = new Object();
  maPinata.life = 5;
  maPinata.img = $('#pinataImg');
  pinatas.push(maPinata);

  var x = setInterval(function() {

    if(pinatas == []){
        clearInterval(x);
    }
    if (wavecounter / 120 == 0 && wavecounter != 0){
      // new bouton ALED
      var boutonHelp = document.createElement("button");
      boutonHelp.value ="Abandonner";
      boutonHelp.className="boutonHelp";
      document.body.appendChild(boutonHelp);
    }
    wavecounter = timerUpdate(t, wavecounter);

    pinatas.forEach(function(pin) {
      // Simulate click on the pinata for make it move
      move(pin.img);
	  console.log("ID: "+pin.img.id)
    });

  }, 1000);
}

function move(pi){
  var rd_x = Math.random() *  250;
  var rd_y = Math.random() *  250;
  var rd_plusormin = Math.floor(Math.random() * 2);

  var screenWidth = $(window).width() - 100;
  var screenHeight = $(window).height() - 100;

  var actual_top = $(pi).css('top');
  var actual_left = $(pi).css('left');

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

  // Retrieve and change pinata's style
  $(pi).animate({
      top: new_top,
      left: new_left,
      opacity: '1'
    }, 800, function() {
    });
}


function pleaseStopGame(){
  pinatas = [];
}
