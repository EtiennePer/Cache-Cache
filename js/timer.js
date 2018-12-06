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
}

function timerUpdate(){
	// Get current time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = t.countDownTime - now;
    
    // Output the result in an element with id="demo"
    //document.getElementById("demo").innerHTML = distance;
    let distance2 = Math.abs(distance - t.roundTime);
    let angle = distance2* (360/t.roundTime);
    document.getElementById("demo").innerHTML = distance2;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "BOUM";
    }
	t.draw(angle);
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