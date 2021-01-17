import IExpressController from './IExpressController';
import express, { response } from 'express';

export default class ApiController implements IExpressController {

  private path: string;
  public readonly router: express.Router;

  constructor() {
    this.path = '/api';
    this.router = express.Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post(`${this.path}/`, this.getUserData);
  }

  private getUserData(request: express.Request, response: express.Response) {
    
  }

}