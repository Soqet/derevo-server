import express from 'express';


export default interface IExpressController {
  readonly router: express.Router,
}