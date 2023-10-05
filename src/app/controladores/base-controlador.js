const templates = require('../views/templates');

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
    return (request, response) => {
      // Lógica de login.
    }
  }

}

module.exports = BaseControlador;