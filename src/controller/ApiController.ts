import Controller from './Controller';
import express, { response } from 'express';

export default class ApiController extends Controller {
  constructor() {
    super('/api');
    this.initRoutes();
  }

  protected initRoutes() {
    this.router.post(`${this.path}/helloworld`, this.getUserData);
  }

  private getUserData(request: express.Request, response: express.Response) {
    
  }

}