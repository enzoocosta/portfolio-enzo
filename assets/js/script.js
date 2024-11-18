'use strict';

// Função de alternância de elemento
const alternarElemento = function (elem) { elem.classList.toggle("ativo"); }

// Variáveis da barra lateral
const barraLateral = document.querySelector("[data-sidebar]");
const botaoBarraLateral = document.querySelector("[data-sidebar-btn]");

// Funcionalidade de alternância da barra lateral para mobile
botaoBarraLateral.addEventListener("click", function () { alternarElemento(barraLateral); });

// -------------------------------------------------------------

// Variáveis dos depoimentos
const itemDepoimentos = document.querySelectorAll("[data-depoimentos-item]");
const contModal = document.querySelector("[data-modal-container]");
const botaoFecharModal = document.querySelector("[data-modal-fechar-btn]");
const sobreposicao = document.querySelector("[data-overlay]");

// Variáveis do modal
const imgModal = document.querySelector("[data-modal-img]");
const tituloModal = document.querySelector("[data-modal-titulo]");
const textoModal = document.querySelector("[data-modal-texto]");

// Função de alternância do modal
const alternarModalDepoimentos = function () {
  contModal.classList.toggle("ativo");
  sobreposicao.classList.toggle("ativo");
}

// Adicionar evento de clique para todos os itens de depoimentos
for (let i = 0; i < itemDepoimentos.length; i++) {

  itemDepoimentos[i].addEventListener("click", function () {

    imgModal.src = this.querySelector("[data-depoimentos-avatar]").src;
    imgModal.alt = this.querySelector("[data-depoimentos-avatar]").alt;
    tituloModal.innerHTML = this.querySelector("[data-depoimentos-title]").innerHTML;
    textoModal.innerHTML = this.querySelector("[data-depoimentos-text]").innerHTML;

    alternarModalDepoimentos();

  });

}

// Adicionar evento de clique ao botão de fechar o modal
botaoFecharModal.addEventListener("click", alternarModalDepoimentos);
sobreposicao.addEventListener("click", alternarModalDepoimentos);



// Variáveis da seleção personalizada
const selecao = document.querySelector("[data-selecao]");
const itensSelecao = document.querySelectorAll("[data-item-selecao]");
const valorSelecao = document.querySelector("[data-valor-selecao]");
const botaoFiltro = document.querySelectorAll("[data-filter-btn]");

selecao.addEventListener("click", function () { alternarElemento(this); });

// Adicionar evento em todos os itens de seleção
for (let i = 0; i < itensSelecao.length; i++) {
  itensSelecao[i].addEventListener("click", function () {

    let valorSelecionado = this.innerText.toLowerCase();
    valorSelecao.innerText = this.innerText;
    alternarElemento(selecao);
    //funcaoFiltro(valorSelecionado);

  });
}

// Variáveis do filtro
const itensFiltro = document.querySelectorAll("[data-filtro-item]");

const funcaoFiltro = function (valorSelecionado) {

  for (let i = 0; i < itensFiltro.length; i++) {

    if (valorSelecionado === "all") {
      itensFiltro[i].classList.add("ativo");
    } else if (valorSelecionado === itensFiltro[i].dataset.category) {
      itensFiltro[i].classList.add("ativo");
    } else {
      itensFiltro[i].classList.remove("ativo");
    }

  }

}






// Adicionar evento em todos os itens do botão de filtro para telas grandes
let ultimoBotaoClicado = botaoFiltro[0];

for (let i = 0; i < botaoFiltro.length; i++) {

  botaoFiltro[i].addEventListener("click", function () {

    let valorSelecionado = this.innerText.toLowerCase();
    valorSelecao.innerText = this.innerText;
    funcaoFiltro(valorSelecionado);

    ultimoBotaoClicado.classList.remove("ativo");
    this.classList.add("ativo");
    ultimoBotaoClicado = this;

  });

}

// Variáveis do formulário de contato
const formulario = document.querySelector("[data-formulario]");
const inputsFormulario = document.querySelectorAll("[data-input-formulario]");
const botaoFormulario = document.querySelector("[data-btn-formulario]");

// Adicionar evento a todos os campos de input do formulário
for (let i = 0; i < inputsFormulario.length; i++) {
  inputsFormulario[i].addEventListener("input", function () {
    
    // check validaçao formulario

    if (form.verificarValidade()) { 
      botaoFormulario.removeAtributo("desabilitado"); 
    } else {
      botaoFormulario.definirAtributo("desabilitado", "");}
    
  });

}


// variáveis de navegação da página


const linksNavegacao = document.querySelectorAll("[data-nav-link]");
const paginas = document.querySelectorAll("[data-page]");



// adicionar evento a todos os links de navegação


for (let i = 0; i < linksNavegacao.length; i++) { 
  linksNavegacao[i].addEventListener("click", function () { 
    for (let j = 0; j < paginas.length; j++) { // Use 'j' no loop interno
      if (this.innerHTML.toLowerCase() === paginas[j].dataset.page) {
        paginas[j].classList.add("ativo"); 
        linksNavegacao[j].classList.add("ativo"); 
        window.scrollTo(0, 0); 
      } else {
        paginas[j].classList.remove("ativo"); 
        linksNavegacao[j].classList.remove("ativo"); 
      }
    }
  });
}
