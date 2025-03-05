import { Component } from '@angular/core';
import { Task } from '../task';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  newTask: Task = {title: "", dueDate: "", priority: "", content:"", createdAt:"", updatedAt:""}
  errorMessage: any ={}
  constructor(private apiService: ApiService, private router: Router){}
  addTask(): void{
    this.apiService.createTask(this.newTask).subscribe({
      next: res => this.router.navigate(['/']),
      error: err => {this.errorMessage = err;
        console.log(err)
      }
    })
  }
}
