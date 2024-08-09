import { Component, Directive } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { TasksList } from './tasksList';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  // Swal : ('sweetalert2')
  taskDetails: FormGroup;
  taskArray: any[] = [];
  updatedArray: any[] = [];
  newTasks: any[] = [];
  options: any;

  constructor() {
    this.taskDetails = new FormGroup({
      Tasks: new FormControl('', Validators.required),
      Descriptions: new FormControl('', Validators.required),
      Status: new FormControl('Active', Validators.required),
    });
    this.updateTasks();
  }
  formatDate(date: any){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getDate() + "/" + (date.getMonth()+1) + "/" +  date.getFullYear() + "  " + strTime;
  }


  updateTasks(): void {
    // retriving the data from the local storage
    const storedTasks = localStorage.getItem('taskArray');
    this.updatedArray = storedTasks ? JSON.parse(storedTasks) : [];
  }

  deleteTask(index: number): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        // if comfirmed deleting the task
        this.taskArray.splice(index, 1);
        localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
        this.updateTasks();

        Swal.fire({
          // after deleting msg
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  addTask(): void {
    if (this.taskDetails.invalid) {
      // if All fields is not filled
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All the Fields",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }
    // getting the value from the form
    const task1 = this.taskDetails.get('Tasks')?.value;
    const description1 = this.taskDetails.get('Descriptions')?.value;
    const status1 = this.taskDetails.get('Status')?.value;

    // to check if the task name is not repeated
    var IsRepeated = false;
     this.updatedArray.forEach(task => {
     if(task.tasks === task1){
      IsRepeated = true
     }
    })
      
    if (IsRepeated === false) {

      // getting the current date and time
      const currentDate = new Date();
      const formattedDate = this.formatDate(currentDate);
      // const formattedDate = currentDate.toLocaleDateString("en-US");

      let CompletedformattedDate = '---';

      if (this.taskDetails.get('Status')?.value == 'Completed') {
        // Update the completedDate
        console.log('completed');
        const CompletedcurrentDate = new Date();
        CompletedformattedDate =this.formatDate(currentDate);
      }

      // creating Object of TaskList
      var tasklist = new TasksList(task1, description1, status1, formattedDate,CompletedformattedDate);

      // Pushing the Object in the Array
      this.taskArray.push(tasklist);

      // Storing data in Local Storage
      localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
      // Empting the input value
      this.taskDetails.get('Tasks')?.setValue('');
      this.taskDetails.get('Descriptions')?.setValue('');

      this.updateTasks();
    } else {
      // if the task name is repeated
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Task Already Exists!",
      });
    }
  }


  editTask(index: any, item: any): void {

    this.taskDetails.get('Tasks')?.setValue(this.taskArray[index].tasks);
    this.taskDetails.get('Descriptions')?.setValue(this.taskArray[index].descriptions);
    this.taskDetails.get('Status')?.setValue(this.taskArray[index].status);
    this.taskArray.splice(index, 1);
    localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
    this.updateTasks();
  }

  ngOnInit(): void {
    
  }

}
