import express from 'express';
import cors from 'cors';
import parser from 'body-parser';
import helmet from 'helmet';

const middleWare = [
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  }),
  parser.json(),
  parser.urlencoded({ extended: true })
]
class App {
  constructor() {
    this.express = express();
    this.mountMiddleWare();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
  }

  // mount routes

}

export default new App();