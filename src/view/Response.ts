export interface IResponse {
  data: any,
  isSuccess: boolean
}

export class Response implements IResponse {

  data: any;
  isSuccess: boolean;

  constructor(response: IResponse) {
    this.data = response.data;
    this.isSuccess = response.isSuccess;
  }

  static fromSuccessData(data: any) {
    return new this({
      data: data,
      isSuccess: true
    })
  }

  static fromError(error: Error) {
    return new this({
      data: {
        errorName: error.name,
        errorMessage: error.message
      },
      isSuccess: false
    })
  }

}