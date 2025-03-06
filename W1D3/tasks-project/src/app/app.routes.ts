import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
    {path:"", component: TasksListComponent},
    {path:"add", component: AddTaskComponent},
    {path:"show/:id", component: ShowTaskComponent},
    {path:"edit/:id", component: EditTaskComponent},
];
