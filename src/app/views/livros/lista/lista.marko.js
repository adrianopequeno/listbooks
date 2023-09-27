// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/criando_servidor_nodejs$1.0.0/src/app/views/livros/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Livros</title><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/casadocodigo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-casadocodigo.svg\" alt=\"Casa do Código\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Listagem de livros</h1><a href=\"http://localhost:3000/livros/form\"><button class=\"btn btn-primary bt-new-book\">Cadastrar novo Livro</button></a><table id=\"livros\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><td>ID</td><td>Título</td><td>Preço</td><td>Editar</td><td>Remover</td></tr></thead><tbody>");

  var for__33 = 0;

  marko_forEach(input.livros, function(livro) {
    var keyscope__34 = "[" + ((for__33++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(livro.id) +
      "\"><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.preco) +
      "</td><td><a href=\"/livros/form/" +
      marko_escapeXmlAttr(livro.id) +
      "\" class=\"btn btn-info\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(livro.id) +
      "\" data-type=\"remocao\" class=\"btn btn-danger\">Remover</a></td></tr>");
  });

  out.w("</tbody></table></div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><img src=\"/estatico/imagens/logo-rodape.svg\" class=\"logo-rodape\"></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"http://www.facebook.com/casadocodigo\" class=\"compartilhar-facebook\" target=\"_blank\">/CasaDoCodigo</a></li><li><a href=\"http://www.twitter.com/casadocodigo\" class=\"compartilhar-twitter\" target=\"_blank\">@casadocodigo</a></li></ul></div></div></div></footer><script src=\"/estatico/js/remove-livro.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "55");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/criando_servidor_nodejs$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
