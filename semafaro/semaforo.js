const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null // deixa claro que ela existe mas nao esta atribuida a nada

const trafficLight = (event)  => { //1 - saber em qual botao clicou 2 - recebeu o evento que foi clicado 3 - vai ver o q ta recebendo do evento
  stopAutomatic()//qualquer clique que der, o automatico para e chama o proximo evento
  turnOn[event.target.id]()//target = diz onde ta clicando e id = da o botao que foi clicado
  //acessar e chamar dinamicamente uma função dentro de um objeto
}

const changeColor = () =>{
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex]
  turnOn[color]()
  nextIndex()
}

const nextIndex = () =>{
  if (colorIndex<2){
    colorIndex++
  } else{
    colorIndex = 0
  }
}

const stopAutomatic = () =>{
  clearInterval(intervalId)
}


const turnOn = { //faz um objeto literal e cria as funções que mudam as imagens
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => intervalId = setInterval(changeColor, 1000)// a variavel armazena a função em uma variavel, permitindo o controle dela mais tarde
}

buttons.addEventListener("click", trafficLight)