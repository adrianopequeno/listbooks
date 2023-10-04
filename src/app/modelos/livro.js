const { check, validationResult } = require('express-validator');

class Livro {
  static validacoes() {
    return [
      check('titulo').isLength({ min: 5 }).withMessage('O título deve ter pelo menos 5 caracteres'),
      check('preco').isCurrency().withMessage('O preço deve ser um valor monetário válido')
    ]
  }
}

module.exports = Livro;