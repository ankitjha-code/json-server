const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// This sets up minimal middlewares without requiring a "public" folder
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, "noop"), // use a fake static folder that doesn't exist
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
