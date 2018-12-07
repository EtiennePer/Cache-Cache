
var pinatas = [];

function launchGame(){
    var imgPinata = document.getElementById("imgSvg");
    var divPinata = document.getElementById("divSvg");
    pinatas.push(imgPinata);
    while(pinatas.length!=0){
        move(imgPinata,divPinata)
        pinatas.splice(0, 1)
    }
}

function move(imgPinata,divPinata){
    //divPinata.style.top = Math.random() * 100+'%';
    //divPinata.style.left = Math.random() * 100+'%';
    var newStyle = 'transform: translate3d('+Math.random() *  100+'px,'
      + Math.random() * 100 +'px,0px);';
      + 'transform:rotate('+Math.random() * 360+'deg);'
      + 'display: inline-block;'
    divPinata.setAttribute('style',newStyle);
}
