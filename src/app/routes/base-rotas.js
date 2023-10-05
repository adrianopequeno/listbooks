const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

module.exports = app => {

  const rotasBase = BaseControlador.rotas();

  // Rota inicial
  app.get(rotasBase.home, baseControlador.home());
}
