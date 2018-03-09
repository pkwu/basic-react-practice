import http from 'http';
import App from './config/express';
import { success } from './lib/log';
import './config/database';

const app = App.express;

const server = http.createServer(app);
const PORT = 1337;

server.listen(PORT, err => {
  if (err) throw new Error;
  success(`successfully connected to port ${PORT}`);
});

export default server;