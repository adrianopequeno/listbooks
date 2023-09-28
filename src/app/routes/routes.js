const { check, validationResult } = require('express-validator');

const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = app => {
  // Rota inicial
  app.get('/', (request, response) => {
    response.marko(
      require('../views/base/base/home.marko'),
    );

  });

   // lista todos os livros
  app.get('/livros', (request, response) => {
    const livroDao = new LivroDao(db);
    livroDao.lista()
      .then(livros => response.marko(
        require('../views/livros/lista/lista.marko'),
        { livros }
        ))
      .catch(erro => console.log(erro));

  });

  // Pega um livro pelo id
  app.get('/livros/form/:id', (request, response) => {
    const id = request.params.id;
    const livroDao = new LivroDao(db);
    livroDao.buscaPorId(id)
      .then(livro => response.marko(
        require('../views/livros/form/form.marko'),
        { livro }
        ))
      .catch(erro => console.log(erro));
  });

  // Adiciona um novo livro
  app.post('/livros', [
    check('titulo').isLength({ min: 5 }).withMessage('O título deve ter pelo menos 5 caracteres'),
    check('preco').isCurrency().withMessage('O preço deve ser um valor monetário válido')
  ],(request, response) => {
    console.log(request.body);
    const livroDao = new LivroDao(db);

    const erros = validationResult(request);
    console.log(erros);

    if(!erros.isEmpty()) {
      return response.marko(
        require('../views/livros/form/form.marko'),
        { 
          livro: {},
          errosValidacao: erros.array()
        }
      );
    }

    livroDao.adiciona(request.body)
      .then(response.redirect('/livros'))
      .catch(erro => console.log(erro));
  });

  // Remove um livro
  app.delete('/livros/:id', (request, response) => {
    const id = request.params.id;
    const livroDao = new LivroDao(db);
    livroDao.remove(id)
      .then(() => response.status(200).end())
      .catch(erro => console.log(erro));
  });

  // rota para inciar a atualização de um livro
  app.get('/livros/form', (request, response) => {
    response.marko(require('../views/livros/form/form.marko'), {livro: {}});
  });

  app.put('/livros', (request, response) => {
    console.log(request.body);
    const livroDao = new LivroDao(db);
    livroDao.atualiza(request.body)
      .then(response.redirect('/livros'))
      .catch(erro => console.log(erro));
  });

  

}
