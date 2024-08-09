import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(){
    return this.http.get('http://localhost:2500/tasks/all')
  }

  addTask(task: any){
    return this.http.post('http://localhost:2500/tasks/add-task', task)
    
  }
  
  updateTask(task: any){
    return this.http.post('http://localhost:2500/tasks/update-task', task)
  }

  deleteTask(task: any) {
    return this.http.delete(`http://localhost:2500/tasks/delete-task/${task.taskToDo}`);
  }
}
