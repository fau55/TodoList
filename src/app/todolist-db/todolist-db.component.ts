import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tasks } from './tasks';
import { response } from 'express';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todolist-db',
  templateUrl: './todolist-db.component.html',
  styleUrl: './todolist-db.component.css'
})
export class TodolistDbComponent {
  taskName: String = '';
  taskDescription: String = '';
  taskStatus: String = '';
  updateTaskId = ''
  taskList: any;
  updateWithId = '';
  updateTaskForm: FormGroup;
  constructor(private taskService: TaskService) {
    this.updateTaskForm = new FormGroup({
      taskToUpdate: new FormControl,
      descriptionToUpdate: new FormControl,
      statusToUpdate: new FormControl
    })
  }
  ngOnInit() {
    this.getAlltask()
  }

  addNewTask() {
    let task = new Tasks(this.taskName, this.taskDescription, this.taskStatus);
    this.taskService.addTask(task).subscribe(
      (response: any) => {
        console.log(response.Message);
        this.getAlltask();
      },
      (error: any) => {
        console.error('Error adding task:', error);
      }
    );
    this.getAlltask()

  }
  editTask(task: any) {
    this.updateTaskId = task._id
    this.updateTaskForm.get('taskToUpdate')?.setValue(task.taskToDo);
    this.updateTaskForm.get('descriptionToUpdate')?.setValue(task.description);
    this.updateTaskForm.get('statusToUpdate')?.setValue(task.status);
  }
  UpdateTask() {
    let TaskToUpdate = {
      _id : this.updateTaskId,
      taskToDo : this.updateTaskForm.get('taskToUpdate')?.value,
      description : this.updateTaskForm.get('descriptionToUpdate')?.value,
      status : this.updateTaskForm.get('statusToUpdate')?.value,
    }
    console.log(TaskToUpdate);
    this.taskService.updateTask(TaskToUpdate).subscribe(
      (response: any) => {
        console.log(response.Message);
        this.getAlltask();
      },
      (error: any) => {
        console.error('Error updating task:', error);
      }
    );
    this.getAlltask()

  }

  deleteTask(task: any) {
    console.log(task);
    this.taskService.deleteTask(task).subscribe((response) => {
      console.log(response);
      this.getAlltask()
    })
  }

  getAlltask() {
    this.taskService.getAllTasks().subscribe((response: any) => {
      this.taskList = response.Task_list;
    })
  }

}
