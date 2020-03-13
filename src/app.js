import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import './config/db/database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.server.listen(8080);
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
