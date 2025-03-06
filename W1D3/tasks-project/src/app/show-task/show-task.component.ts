import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-task',
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  task!: Task
  constructor(private route: ActivatedRoute, private apiService: ApiService){}
  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get("id")
    if(_id){
      this.apiService.getTaskById(_id).subscribe({
        next: data => this.task = data,
        error: err => console.error("Error fetching task: ",err)
      })
    }
  }


}
