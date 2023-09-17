const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = app => {
  // Rota inicial
  app.get('/', (request, response) => {
    const html = `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
      <body>
        <h1>Olá Mundo!</h1>
      </body>
    `;

    response.send(html);
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
  app.post('/livros', (request, response) => {
    console.log(request.body);
    const livroDao = new LivroDao(db);
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
