'use strict';


const images = [
  { 'id': '1', 'url': './img/chrono.jpg' },
  { 'id': '2', 'url': './img/inuyasha.jpg' },
  { 'id': '3', 'url': './img/tenchi.jpg' },
  { 'id': '4', 'url': './img/tenjhotenge.jpg' },
  { 'id': '5', 'url': './img/yuyuhakusho.jpg' },
  { 'id': '6', 'url': './img/ippo.png' },
]

const containerItems = document.querySelector('#container-items') //seleciona os elementos HTML, nesse caso as imagens e armazena

//estrutura que faz carregamento dinamico da imagem
const loadImages = (images, container) => {
  images.forEach(image => { //para cada imagem cria um bloco HTML contendo a imagem adicionar o conteudo existente
    container.innerHTML += `
    <div class = 'item'>
      <img src = '${image.url}'
    </div>
    `
  })
}

loadImages(images, container)//executar a função acima



let items = document.querySelectorAll('.item') //seleciona todos os elementos com a classe item

const previous = () => {
  containerItems.appendChild(items[0])// appendChild envia p final, entao ele ta pegando o primeiro item e mandando pro final
  items = document.querySelectorAll('.item') //atualiza a lista , para que mostre a nova ordem
}


const next = () => { //agora tem que fazer o inverso, pegar o ultimo e mandar pro primeiro
  const lastItem = items[items.legth - 1]
  containerItems.insertBefore(lastItem, items[0]) //pega o ultimo item e coloca antes do primeiro

}

document.querySelector('#previous').addEventListener("click", previous)
document.querySelector('#next').addEventListener("click", next)