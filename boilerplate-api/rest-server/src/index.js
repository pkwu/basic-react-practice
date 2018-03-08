import http from 'http';
import App from './config/express';

const app = App.express;

const server = http.createServer(app);
const PORT = 1337;

server.listen(PORT, err => {
  if (err) throw new Error;
  console.log('successfully connected to port ', PORT);
});

export default server;