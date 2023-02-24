const express = require('express');

const planetsRoute = require('./routes/planets.routes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${end}ms`)
})

app.use(planetsRoute);

module.exports = app;
