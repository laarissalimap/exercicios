'use strict';

const { isMapIterator } = require("util/types");

const display = document.getElementById('display') //capturar display
const numeros = document.querySelectorAll('[id*=tecla]') //capturar os numeros(o QS tem vantagem de utilizar todos os seletores do CSS, então da pra utilizar seletrores mais avançados(seleciona os elementos cujo o ID tenha parcialmente(*=) o nome tecla))
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true //novo numero escrito na tela
let operador
let numeroAnterior

const operacaoPendente = () => operador !== undefined

const calcular = () => {
  if (operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
    novoNumero = true
    const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
    atualizarDisplay(resultado);
  }
}

// recebe um texto e concatena(+=)
const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto.toLocaleString('BR')
    novoNumero = false
  } else {
    display.textContent += texto.toLocaleString('BR')
  }
}

//como mandar para o display(recebe o evento e cria um metodo para atualizar o display e la vai receber o numero(ta mandando pro atualizar display o texto que ta dentro  de cada uma tecla que foi clicada))
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)

//como capturar o click de cada uma das teclas
numeros.forEach(numero => numero.addEventListener('click', inserirNumero)) //pega um numero e adc um click e manda pra outra callback


//quando for clicado, cria um novo numero e depois armazena o operador a operação e guarda o numero anterior
const selecionarOperador = (evento) => {
  if (!novoNumero) {
    calcular()
    novoNumero = true
    operador = evento.target.textContent
    numeroAnterior = parseFloat(display.textContent.replace(',', '.'))
    console.log(operador)
  }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))

const ativarIgual = () => {
  calcular()
  operador = undefined
}

document.getElementById('igual').addEventListener('click', ativarIgual)


const limparDisplay = () => display.textContent = ''
document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const limparCalculo = () => {
  limparDisplay()
  operador = undefined
  novoNumero = true
  numeroAnterior = undefined
}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo)

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1)

document.getElementById('backspace').addEventListener('click', removerUltimoNumero)

const inverterSinal = () => {
  novoNumero = true
  atualizarDisplay(display.textContent * -1)
}
document.getElementById('inverter').addEventListener('click', inverterSinal)

const existeDecimal = () => display.textContent.indexOf(',') !== -1
const existeValor = () => display.textContent.length > 0

const inserirDecimal = () => {
  if (!existeDecimal()) {
    if (existeValor()) {
      atualizarDisplay(',')
    } else {
      atualizarDisplay('0,')
    }
  }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal)


const mapTeclado = {
  0: 'tecla0',
  1: 'tecla1',
  2: 'tecla2',
  3: 'tecla3',
  4: 'tecla4',
  5: 'tecla5',
  6: 'tecla6',
  7: 'tecla7',
  8: 'tecla8',
  9: 'tecla9',
  '/': 'operadorDividir',
  '*': 'operadorMultiplicar',
  '-': 'operadorSubtrair',
  '+': 'operadorAdicionar',
  '=': 'igual',
  Enter: 'igual',
  Backspace: 'backspace',
  c: 'limparDisplay',
  Escape: 'limparCalculo',
  ',': 'decimal',
}

const mapearTeclado = (evento) => {
  const tecla = evento.key
  const teclaPermitida = () => Object.keys(mapearTeclado).indexOf(tecla) !== -1
  if(teclaPermitida()) document.getElementById(mapearTeclado[tecla]).click()
}

document.addEventListener('keydown', mapearTeclado)