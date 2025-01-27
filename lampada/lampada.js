const turnOnOff = document.getElementById("turnOnOff")
const lamp = document.getElementById("lamp")

function isLampbroken() {
  return lamp.src.indexOf("quebrada") > -1
}

function lampBreak() {
  lamp.src = 'img/quebrada.jpg'
}

function lampOn() {
  if (!isLampbroken()) {
    lamp.src = 'img/ligada.jpg'
  }
}

function lampOff() {
  if (!isLampbroken()) {
    lamp.src = 'img/desligada.jpg'
  }
}

function lampOnOff(){
  if (turnOnOff.textContent == "Ligar"){
    lampOn()
    turnOnOff.textContent = "Desligar"
  }
  else{
    lampOff()
    turnOnOff.textContent = "Ligar"
  }
}

turnOnOff.addEventListener("click", lampOnOff)
lamp.addEventListener("click", lampBreak)
lamp.addEventListener("mouseover",  lampOn)
lamp.addEventListener("mouseleave", lampOff)