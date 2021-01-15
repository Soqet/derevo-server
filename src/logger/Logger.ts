 import { Request, IRequest } from './Request';
 import { Response, IResponse } from '../view/Response';

 export default class Logger {

  private loggFunction: Function;

   constructor (loggFunction: Function) {
    this.loggFunction = loggFunction;
   }

   public async logg(request: IRequest, response: IResponse) {
    //call this.loggFunction
   }

 }