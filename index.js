const server = require('./api/server');

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});