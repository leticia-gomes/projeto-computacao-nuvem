const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 API rodando na nuvem!');
});

app.get('/alunos', (req, res) => {
  res.json([
    { nome: "Ana" },
    { nome: "Carlos" },
    { nome: "Letícia" }
  ]);
});

app.get('/professores', (req, res) => {
  res.json([
    { nome: "João" },
    { nome: "Roberta" },
    { nome: "Patrícia" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/admin', (req, res) => {
  const token = req.headers.authorization;

  if (token !== "123456") {
    return res.status(401).send("Não autorizado");
  }

  res.send("Área segura");
});

app.use((req, res, next) => {
  console.log(`Rota acessada: ${req.url}`);
  next();
});
