const Livro = require('../modelos/livro');

const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

module.exports = app => {

  const rotasLivro = LivroControlador.rotas();

  // lista todos os livros
  app.get(rotasLivro.lista, livroControlador.lista());

  // Pega um livro pelo id
  app.get(rotasLivro.edicao, livroControlador.pegaPorId());

  // Rotas para iniciar a criação de um novo livro
  // Adiciona um novo livro
  // Atualiza um livro
  app.route(rotasLivro.cadastro)
    .get(livroControlador.formularioCadastro())
    .post(Livro.validacoes(), livroControlador.cadastrar())
    .put(livroControlador.editar());

  // Rota para iniciar a atualização de um livro
  app.get(rotasLivro.edicao, livroControlador.formularioEdicao());

  // Remove um livro
  app.delete(rotasLivro.delecao, livroControlador.remover());

}
