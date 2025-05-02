// importa o express
const express = require('express');

// importa o path (para lidar com caminhos de arquivos)
const path = require('path');

// cria o app do express
const app = express();

// define a porta onde o servidor vai rodar
const PORT = 3000;

// diz para o express usar a pasta 'public' como pasta estática (html, css, imagens etc.)
app.use(express.static(path.join(__dirname, 'public')));

// rota principal (quando acessa o site direto)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

// rota para o produto A
app.get('/produtoA', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/produtoA.html'));
});

// rota para o produto B
app.get('/produtoB', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/produtoB.html'));
});

// inicia o servidor e mostra a mensagem no terminal
app.listen(PORT, () => {
  console.log(`servidor ellami rodando em http://localhost:${PORT}`);
});
