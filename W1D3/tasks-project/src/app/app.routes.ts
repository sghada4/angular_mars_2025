import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    {path:"", component: TasksListComponent},
    {path:"add", component: AddTaskComponent},
];
