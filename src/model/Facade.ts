import CategoryManager from "./buisness-logic/CategoryManager";
import FolderManager from "./buisness-logic/FolderManager";
import TaskManager from "./buisness-logic/TaskManager";
import UserManager from "./buisness-logic/UserManager";
import DbModule from "./DbModule";

class Facade {
  
  private dbModule: DbModule;
  private taskManager: TaskManager;
  private categoryManager: CategoryManager;
  private userManager: UserManager;
  private folderManager: FolderManager;

  constructor(dbModule: DbModule) {
    this.dbModule = dbModule;
    this.taskManager = new TaskManager();
    this.categoryManager = new CategoryManager();
    this.folderManager = new FolderManager();
    this.userManager = new UserManager();
  }

}