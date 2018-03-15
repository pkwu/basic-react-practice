import http from 'http';
import App from './config/express';
import { success } from './lib/log';
import './config/database';
import './config/mongoDB/database';

const app = App.express;

const server = http.createServer(app);

server.listen(process.env.PORT, err => {
  if (err) throw new Error;
  success(`successfully connected to port ${process.env.PORT}`);
});

export default server;