const templates = require('../views/templates');

const LivroControlador = require('./livro-controlador');

class BaseControlador {

  static rotas() {
    return {
      home: '/',
      login: '/login'
    };
  }

  home() {
    return (request, response) => {
      response.marko(
        templates.base.home,
      );
  
    }
  }

  login() {
    return (request, response) => {
      response.marko(
        templates.base.login,
      );
  
    }
  }

  efetuaLogin() {
    return (request, response, next) => {
      const passport = request.passport;
      passport.authenticate('local', (erro, usuario, info) => {
        if (info) {
          return response.marko(
            templates.base.login
          );
        }
        
        if(erro) {
          return next(erro);
        }

        request.login(usuario, (erro) => {
          if(erro) {
            return next(erro);
          }

          return response.redirect(LivroControlador.rotas().lista);
        });
      
      })(request, response, next);
    };
  }

}

module.exports = BaseControlador;