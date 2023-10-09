const { validationResult } = require('express-validator');

const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class LivroControlador {

  static rotas() {
    return {
      autenticadas: '/livros*',
      lista: '/livros',
      cadastro: '/livros/form',
      edicao: '/livros/form/:id',
      delecao: '/livros/:id'
    }
  }

  lista() {
    return (request, response) => {
      const livroDao = new LivroDao(db);
      livroDao.lista()
        .then(livros => response.marko(
          templates.livros.lista,
          { livros }
          ))
        .catch(erro => console.log(erro));
    }
  }

  pegaPorId() {
    return (request, response) => {
      const id = request.params.id;
      const livroDao = new LivroDao(db);

      livroDao.buscaPorId(id)
        .then(livro => response.marko(
            templates.livros.form,
            { livro }
          )
        )
        .catch(erro => console.log(erro));
    }
  }

  formularioCadastro() {
    return (request, response) => {
      response.marko(
        templates.livros.form,
        { livro: {} }
      );
    }
  }

  formularioEdicao() {
    return (request, response) => {
      const id = request.params.id;
      const livroDao = new LivroDao(db);

      livroDao.buscaPorId(id)
        .then(livro => response.marko(
            templates.livros.form,
            { livro }
          )
        )
        .catch(erro => console.log(erro));
    }
  }

  cadastrar() {
    return (request, response) => {
      const livroDao = new LivroDao(db);
  
      const erros = validationResult(request);
      console.log(erros);
  
      if(!erros.isEmpty()) {
        return response.marko(
          templates.livros.form,
          { 
            livro: {},
            errosValidacao: erros.array()
          }
        );
      }
  
      livroDao.adiciona(request.body)
        .then(response.redirect(LivroControlador.rotas().lista))
        .catch(erro => console.log(erro));
    }
  }

  editar() {
    return (request, response) => {
      const livroDao = new LivroDao(db);
      livroDao.atualiza(request.body)
        .then(response.redirect(LivroControlador.rotas().lista))
        .catch(erro => console.log(erro));
    }
  }

  remover() {
    return (request, response) => {
      const id = request.params.id;
      const livroDao = new LivroDao(db);
      livroDao.remove(id)
        .then(() => response.status(200).end())
        .catch(erro => console.log(erro));
    }
  }


}

module.exports = LivroControlador;