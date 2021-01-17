import { IUser } from './User';
import mongoose from 'mongoose';
import UserModel from './mongo-models/UserModel';
import TaskModel from './mongo-models/TaskModel';
import FolderModel from './mongo-models/FolderModel';
import CategoryModel from './mongo-models/CategoryModel';

export default class DbModule {
  
  private uri;

  constructor(uri: string) {
    this.uri = uri;
    mongoose.connect(this.uri, {useNewUrlParser: true, useUnifiedTopology: true});
  }

  async createUser(
    userData: { 
      email: string,
      googleId: string,
      name: string,
      registrationDate: string 
    }
  ) {
    await (new UserModel(userData)).save();
  }

  async createFolder(
    folderData: {
      color: string,
      description: string,
      name: string,
      ownerId: string
    } 
  ) {
    await (new FolderModel(folderData)).save();
  }

  async createCategory(
    categoryData: {
      ownerId: string,
      description: string,
      name: string,
      color: string,
    }
  ) {
    await (new CategoryModel(categoryData)).save(); 
  }

  async createTask(
    taskData: {
      creatorId: string,
      workerId?: string,
      description: string,
      name: string,
      color: string,
      status: string,
      deadlineDate: string
    }
  ) {
    const now = Math.trunc(Date.now() / 1000);
    await (new TaskModel({ ...taskData, creationDate: now })).save();
  }

}