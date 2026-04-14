require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use((req, res, next) => {
  console.log(`Rota acessada: ${req.url}`);
  next();
});

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

app.get('/cursos', (req, res) => {
  res.json([
    { nome: "ADS" },
    { nome: "Direito" },
    { nome: "Sistemas de Informação" }
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

app.get('/segredo', (req, res) => {
  const token = req.headers.authorization;

  if (token !== process.env.API_KEY) {
    return res.status(401).send("Não autorizado");
  }

  res.send("Acesso permitido");
});

