var isClicked = false;
var pinatas = [];

function launchGame(){
  pinatas.push(pinata);
  var pinata = document.querySelector(".imgSvg");
  if(!isClicked){
    agrandirImage(pinata);
  }
  while(pinatas.length!=0){
    move(pinata)
  }
}

function agrandirImage(pinata){
    isClicked = true
  	pinata.setAttribute('width', 231);
  	pinata.setAttribute('height',274);
}

function agrandirImage(pinata){
  pinata.style.top = Math.random() * document.body.clientWidth + 'px';
  pinata.style.left = Math.random() * document.body.clientHeight + 'px';
  pinata.rotate(Math.random() * 360);
}
