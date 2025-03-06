import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  task!: Task;
  errorMessage: any = {};
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('id');
    if (_id) {
      this.apiService.getTaskById(_id).subscribe({
        next: (data) => {
          data.dueDate = data.dueDate.split('T')[0];
          this.task = data
        },
        error: (err) => console.error('Error fetching task: ', err),
      });
    }
  }
  updateTask(): void{
    this.apiService.editTask(this.task).subscribe({
      next: ()=> this.router.navigate(['/']),
      error: err => this.errorMessage = err
    })
  }
}
