const { check, validationResult } = require('express-validator');

const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();
const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

// const LivroDao = require('../infra/livro-dao');
// const db = require('../../config/database');

module.exports = app => {
  // Rota inicial
  app.get('/', baseControlador.home());

   // lista todos os livros
  app.get('/livros', livroControlador.lista());

  // Pega um livro pelo id
  app.get('/livros/form/:id', livroControlador.pegaPorId());

  // Rota para iniciar a criação de um novo livro
  app.get('/livros/form', livroControlador.formularioCadastro());

  // Rota para iniciar a atualização de um livro
  app.get('/livros/form/:id', livroControlador.formularioEdicao());

  // Adiciona um novo livro
  app.post('/livros',  [
    check('titulo').isLength({ min: 5 }).withMessage('O título deve ter pelo menos 5 caracteres'),
    check('preco').isCurrency().withMessage('O preço deve ser um valor monetário válido')
  ], livroControlador.cadastrar());

  // Atualiza um livro
  app.put('/livros', livroControlador.editar());

  // Remove um livro
  app.delete('/livros/:id', livroControlador.remover());

}
