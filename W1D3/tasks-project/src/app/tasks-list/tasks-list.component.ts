import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.getTasks().subscribe({
      next: (data) => this.tasks=data,
      error: err=> console.error(err),
      complete: ()=> console.info("complete")
    })
  }
  deleteTask(_id:string | undefined):void{
    this.apiService.deleteTask(_id!).subscribe({
      next: ()=> this.tasks = this.tasks.filter(task=> task._id !== _id),
      error: err => console.error(err)
    })
  }
}
