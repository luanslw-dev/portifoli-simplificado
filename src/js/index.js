
const botaoMostrarPojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
botaoMostrarPojetos.addEventListener('click', () => {
  mostrarMaisProjetos();
  esconderBotao();
});

function esconderBotao() {
  botaoMostrarPojetos.classList.add('remover');
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
  });
}
