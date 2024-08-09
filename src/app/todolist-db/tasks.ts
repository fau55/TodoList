export class Tasks {
    taskToDo: String;
    description: String;
    status: String;
  
    constructor(taskToDo: String, description: String, status: String = 'Active') {
      this.taskToDo = taskToDo;
      this.description = description;
      this.status = status;
    }
  }