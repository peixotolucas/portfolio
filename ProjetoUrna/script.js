let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');
// linhas 1 à 6 obter controle dos elementos da página

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';

  for(let i = 0; i < etapa.numeros; i++) {
    numeroHtml += '<div class="numero"></div>';
  }

  seuVotoPara.getElementsByClassName.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {

}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca')
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;
  }
}

function branco(){
  alert("clicou em BRANCO!");
}

function corrige(){
  alert("clicou em CORRIGE!");
}

function confirma(){
  alert("clicou em CONFIRMA!");
}

comecarEtapa()
