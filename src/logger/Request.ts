export interface IRequest {
  method: string,
  parameters: {
    [key: string]: string
  }
}

export class Request implements IRequest {
  method: string;
  parameters: {
    [key: string]: string
  }

  constructor(request: IRequest) {
    this.method = request.method;
    this.parameters = request.parameters;
  }

}