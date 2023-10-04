class BaseControlador {
  home() {
    return (request, response) => {
      response.marko(
        require('../views/base/base/home.marko'),
      );
  
    }
  }
}

module.exports = BaseControlador;