const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.WORKSHOP_API_PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
