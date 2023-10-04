const { check, validationResult } = require('express-validator');

const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();
const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

// const LivroDao = require('../infra/livro-dao');
// const db = require('../../config/database');

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
  app.post(rotasLivro.lista,  [
    check('titulo').isLength({ min: 5 }).withMessage('O título deve ter pelo menos 5 caracteres'),
    check('preco').isCurrency().withMessage('O preço deve ser um valor monetário válido')
  ], livroControlador.cadastrar());

  // Atualiza um livro
  app.put(rotasLivro.lista, livroControlador.editar());

  // Remove um livro
  app.delete(rotasLivro.delecao, livroControlador.remover());

}
