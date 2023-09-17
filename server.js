const app = require('./src/config/curtom-express');	

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});






























/*
const http = require('http');

const servidor = http.createServer((request, response) => {
  if(request.url === '/') {
    html = `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Olá Mundo!</h1>
      </body>
    `;
  } else if (request.url === '/livros') {
    html = `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Listagem de livros</h1>
      </body>
    `;
  }


  response.end(html);
});

servidor.listen(3000);
*/