const http = require('http');
const app = require('./app');

const { getPlanetsData } = require('./models/planets.models');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {

  await getPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
