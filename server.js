const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
const PORT = 3003;

server.use(middlewares);
server.use('/api', router);
server.listen(PORT, () => {
  console.log(`JSON Server is running in port ${PORT}`);
});
