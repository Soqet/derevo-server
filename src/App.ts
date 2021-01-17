import bodyParser from 'body-parser';
import express from 'express';
import IExpressController from './controller/IExpressController';
//import Controller from './controller/Controller';

export default class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IExpressController[], port: number) {
    this.port = port;
    this.app = express();
    this.initControllers(controllers);
    this.initMIddlewares();
  }
  
  private initMIddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use((request, response, next) => {              //logger
      console.log(`${request.method} ${request.path}`);
      next();
    });
  }

  private initControllers(controllers: IExpressController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

}