// Compiled using marko@4.27.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/criando_servidor_nodejs$1.0.0/src/app/views/livros/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro de Livros</title><link rel=stylesheet href=/estatico/css/bootstrap.min.css><link rel=stylesheet href=/estatico/css/fontawesome.min.css><link rel=stylesheet href=/estatico/css/casadocodigo.css></head><body><header class=cabecalhoPrincipal><div class=container><div class=\"row align-items-center\"><div class=col-4><h1 class=logo><img src=/estatico/imagens/logo-casadocodigo.svg alt=\"Casa do Código\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=# class=login><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=conteudoPrincipal><div class=container><div class=form-title><h1>Cadastro de livros</h1><a href=http://localhost:3000/livros><button class=\"btn btn-info\">Voltar</button></a></div>");

  if (input.errosValidacao) {
    var $for$0 = 0;

    marko_forOf(input.errosValidacao, function(data) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(data.path) +
        " - " +
        marko_escapeXml(data.msg) +
        "</div>");
    });
  }

  out.w("<form action=/livros method=post class=form>");

  if (input.livro.id) {
    out.w("<input type=hidden name=_method value=PUT><input type=hidden id=id name=id" +
      marko_attr("value", input.livro.id) +
      ">");
  }

  out.w("<div class=form-group><label for=titulo>Título:</label><input type=text id=titulo name=titulo placeholder=\"coloque o titulo do livro\"" +
    marko_attr("value", input.livro.titulo) +
    " class=form-control></div><div class=form-group><label for=preco>Preço:</label><input type=text id=preco name=preco placeholder=150.25" +
    marko_attr("value", input.livro.preco) +
    " class=form-control></div><div class=form-group><label for=descricao>Descrição:</label><textarea name=descricao rows=10 cols=20 id=descricao placeholder=Descricão class=form-control>" +
    marko_escapeXml(input.livro.descricao) +
    "</textarea></div><input type=submit value=Salvar class=\"btn btn-success bt-success\"></form></div></main><footer class=rodape><div class=container><div class=\"row align-items-center\"><div class=col-4><img src=/estatico/imagens/logo-rodape.svg class=logo-rodape></div><div class=col-8><ul class=redesSociais><li><a href=http://www.facebook.com/casadocodigo class=compartilhar-facebook target=_blank>/CasaDoCodigo</a></li><li><a href=http://www.twitter.com/casadocodigo class=compartilhar-twitter target=_blank>@casadocodigo</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "50");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/criando_servidor_nodejs$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
