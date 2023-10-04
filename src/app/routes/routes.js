const Livro = require('../modelos/livro');

const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();
const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

module.exports = app => {

  const rotasBase = BaseControlador.rotas();
  const rotasLivro = LivroControlador.rotas();

  // Rota inicial
  app.get(rotasBase.home, baseControlador.home());

   // lista todos os livros
  app.get(rotasLivro.lista, livroControlador.lista());

  // Pega um livro pelo id
  app.get(rotasLivro.edicao, livroControlador.pegaPorId());

  // Rota para iniciar a criação de um novo livro
  app.get(rotasLivro.cadastro, livroControlador.formularioCadastro());

  // Rota para iniciar a atualização de um livro
  app.get(rotasLivro.edicao, livroControlador.formularioEdicao());

  // Adiciona um novo livro
  app.post(rotasLivro.lista, Livro.validacoes(), livroControlador.cadastrar());

  // Atualiza um livro
  app.put(rotasLivro.lista, livroControlador.editar());

  // Remove um livro
  app.delete(rotasLivro.delecao, livroControlador.remover());

}
