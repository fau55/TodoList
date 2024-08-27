import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'http://localhost:2500/api/todobuddy/task/'

  constructor(private http: HttpClient) { }

  getAllTasks(){
    return this.http.get(this.baseUrl)
  }

  addTask(task: any){
    return this.http.post(this.baseUrl + 'add-task', task)
    
  }
  
  updateTask(task: any){
    return this.http.post(this.baseUrl + 'update-task' , task)
  }

  deleteTask(task: any) {
    return this.http.delete(`${this.baseUrl}delete-task/${task.taskToDo}`);
  }
}
