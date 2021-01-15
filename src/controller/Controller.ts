import express from 'express';


export default abstract class Controller {
  public path: string;
  public router: express.Router;

  constructor(path: string) {
    this.path = path;
    this.router = express.Router();
  }

  protected abstract initRoutes(): void;

}