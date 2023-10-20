const http = require("http");
const PORT = process.env.PORT || 8000;

const { loadPlanetsData } = require("./models/planets.model");
const app = require("./app");
const { start } = require("repl");

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, (req, res) => {
    console.log(`server listening on ${PORT}`);
  });
}

startServer();
