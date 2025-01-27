const calcular = document.getElementById("calcular")

function imc() {
  const nome = document.getElementById("nome").value
  const altura = document.getElementById("altura").value
  const peso = document.getElementById("peso").value
  const resultado = document.getElementById("resultado")

  if (name !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura*altura)).toFixed(1)

    let classificacao = ''
    if (valorIMC < 18.5){
      classificacao = 'você está baixo do peso.'
    }
    else if (valorIMC < 25){
      classificacao = 'você está com o peso ideal, parabéns.'
    }
    else if (valorIMC < 30){
      classificacao = 'você está levemente acima do peso.'
    }
    else if (valorIMC < 35){
      classificacao = 'você está com obesidade grau 1.'
    }
    else if (valorIMC < 40){
      classificacao = 'você está com obesidade grau 2.'
    }
    else {
      classificacao = 'você está com obesidade grau 3, cuidado.'
    }

    resultado.textContent = `${nome}, o seu peso é: ${peso} e ${classificacao}`

  } else {
    resultado.textContent = "Preencha todos os campos!"
  }
}

calcular.addEventListener("click", imc)