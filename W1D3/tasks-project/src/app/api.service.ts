import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks`);
  }
  createTask(data: Task): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/tasks`, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: any): Observable<any>{
    return throwError(()=> err.error.errors);
  }
}
