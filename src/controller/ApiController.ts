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
    this.router.post(`${this.path}/folder.addcategory`, this.addCategoryToFolder);
    this.router.post(`${this.path}/folder.create`, this.createFolder);
    this.router.post(`${this.path}/folder.update`, this.updateFolder);
    this.router.post(`${this.path}/folder.get`, this.getFolder);
    this.router.post(`${this.path}/folder.getcategories`, this.getCategoriesFromFolder);

    this.router.post(`${this.path}/category.gettasks`, this.getTasksFromCategory);
    this.router.post(`${this.path}/category.getparticipants`, this.getParticipantsFromCategory);
    this.router.post(`${this.path}/category.createtask`, this.createTaskInCategory);
    this.router.post(`${this.path}/category.deleteparticipant`, this.deleteParticipantInCategory);
    this.router.post(`${this.path}/category.updateparticipant`, this.updateParticipantInCategory);
    this.router.post(`${this.path}/category.getcompletedtasks`, this.getCompletedTasksInCategory);
    this.router.post(`${this.path}/category.addparticipant`, this.addParticipantToCategory);
    this.router.post(`${this.path}/category.update`, this.updateCategory);

    this.router.post(`${this.path}/task.addcomment`, this.addCommentToTask);
    this.router.post(`${this.path}/task.update`, this.updateTask);
    this.router.post(`${this.path}/task.deletecomment`, this.deleteCommentFromTask);
    this.router.post(`${this.path}/task.getcomments`, this.getCommentsFromTask);

    this.router.post(`${this.path}/user.updatename`, this.updateUserName);
    this.router.post(`${this.path}/user.updateemail`, this.updateUserEmail);
  }

  private async addCategoryToFolder(request: express.Request, response: express.Response) {
    
  }

  private async createFolder(request: express.Request, response: express.Response) {
    
  }
  
  private async updateFolder(request: express.Request, response: express.Response) {

  }

  private async getFolder(request: express.Request, response: express.Response) {

  }

  private async getCategoriesFromFolder(request: express.Request, response: express.Response) {

  }

  private async getTasksFromCategory(request: express.Request, response: express.Response) {

  }

  private async getParticipantsFromCategory(request: express.Request, response: express.Response) {

  }

  private async createTaskInCategory(request: express.Request, response: express.Response) {

  }

  private async deleteParticipantInCategory(request: express.Request, response: express.Response) {

  }

  private async updateParticipantInCategory(request: express.Request, response: express.Response) {

  }

  private async getCompletedTasksInCategory(request: express.Request, response: express.Response) {

  }

  private async addParticipantToCategory(request: express.Request, response: express.Response) {

  }

  private async updateCategory(request: express.Request, response: express.Response) {

  }

  private async addCommentToTask(request: express.Request, response: express.Response) {

  }

  private async updateTask(request: express.Request, response: express.Response) {

  }

  private async deleteCommentFromTask(request: express.Request, response: express.Response) {

  }

  private async getCommentsFromTask(request: express.Request, response: express.Response) {

  }

  private async updateUserName(request: express.Request, response: express.Response) {

  }

  private async updateUserEmail(request: express.Request, response: express.Response) {

  }
}