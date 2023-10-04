class BaseControlador {

  static rotas() {
    return {
      home: '/'
    };
  }

  home() {
    return (request, response) => {
      response.marko(
        require('../views/base/base/home.marko'),
      );
  
    }
  }
}

module.exports = BaseControlador;