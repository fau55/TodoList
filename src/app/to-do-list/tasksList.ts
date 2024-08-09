export class TasksList {
    tasks :'';
    descriptions : '';
    status : 'Active';
    startedTime: any;
    CompletedTime: any;
    
    constructor(tasks : '', descriptions: '', status: 'Active', startedTime: any, CompletedTime: any){
        this.tasks = tasks;
        this.descriptions = descriptions;
        this.status = status;
        this.startedTime = startedTime;
        this.CompletedTime = CompletedTime;
    }
}