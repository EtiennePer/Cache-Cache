function Timer(loader, border, timerID, roundTime) {
  document.getElementById(timerID).setAttribute("class", "visibleTimer");
  this.id = timerID;
  this.roundTime = roundTime;
  this.loader = loader;
  this.border = border;
  this.ongle = 0;
  this.pi = Math.PI;
  this.t = 30;
  this.visible = true;
  this.countDownTime = new Date().getTime()+this.roundTime;
  this.draw = function(ongle){
	ongle %= 360;
	  var r = ( ongle * this.pi / 180 )
		, x = Math.sin( r ) * 125
		, y = Math.cos( r ) * - 125
		, mid = ( ongle > 180 ) ? 1 : 0
		, anim = 'M 0 0 v -125 A 125 125 1 '
			   + mid + ' 1 '
			   +  x  + ' '
			   +  y  + ' z';

	  loader.setAttribute( 'd', anim );
	  border.setAttribute( 'd', anim );
	};
	this.reset = function(){
	this.countDownTime = new Date().getTime()+this.roundTime;
  }
}

function timerUpdate(t, wavecounter){
	// Get current time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = t.countDownTime - now;

    let distance2 = Math.abs(distance - t.roundTime);
    let angle = distance2* (360/t.roundTime);

    // If the count down is over, write some text
    if (distance < 0) {
		t.reset();
		wavecounter=wavecounter+1;


      var newPinata = new Object();
      newPinata.life = 5;
      newPinata.img = document.createElement("IMG");
      newPinata.img.src="./images/Fortnite_llama_pinata.svg";
      newPinata.img.id="pinataImg"+id;
      newPinata.img.className="pinataImg";
      id+=1;
      document.body.appendChild(newPinata.img);
      pinatas.push(newPinata);
    }
	t.draw(angle);
	return wavecounter;
}
function toggleTimer(id){
	if(this.visible){
		this.visible = false;
		document.getElementById(id).setAttribute("class", "hiddenTimer");
	}
	else {
		this.visible = true;
		document.getElementById(id).setAttribute("class", "visibleTimer");
	}
}
