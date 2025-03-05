# Angular Lecture: API Consumption with HTTP Client and Services

---

## Section 1: Introduction to HTTP Client

### What is HTTP Client?
HTTP Client is a built-in module in Angular that provides tools to make HTTP requests and handle responses from APIs.

### Why Use HTTP Client?
- Simplifies the process of sending HTTP requests.
- Provides methods for GET, POST, PUT, DELETE, etc.
- Supports Observables for handling asynchronous data.
- Offers built-in error handling and interceptors.

### Setup in Standalone Components
To use the `HttpClientModule` in a standalone Angular application, include it in the `providers` array when bootstrapping your application or directly in the standalone component where it's needed.

#### Add `provideHttpClient` to `app.config.ts`

```typescript

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

---

## Section 2: Creating Services

### What are Services?
Services in Angular are singleton classes designed to share logic across multiple components.

### Why Use Services for API Calls?
- Centralizes the logic for API calls.
- Ensures separation of concerns (keeps components cleaner).
- Promotes code reusability.

### Example: Creating a Service

Run the following command to generate a service:

```bash
ng generate service api
```

This creates two files:
- `api.service.ts`: Contains the logic for the service.
- `api.service.spec.ts`: For unit testing.

#### Update `api.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://example.com/api';

  constructor(private http: HttpClient) {}

    //get all items
  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/items`).pipe(
      catchError(this.handleError)
    );
  }

    //create a new item
  createItem(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/items`, data).pipe(
      catchError(this.handleError)
    );
  }

    //get errors from back-end
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(()=>error.error.errors);
  }
}
```

---

## Practical Example: Consuming API in a Component

### Step 1: Create a Component to Display Items
Run the following command to create a new component:

```bash
ng generate component item-list
```

This creates the following files:
- `item-list.component.ts`: Contains the logic for the component.
- `item-list.component.html`: Contains the template for the component.
- `item-list.component.css`: Contains the styles for the component.

#### Update `item-list.component.ts`

```typescript

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe({
      next: (data) => this.items = data,
      error: (err) => console.error(err),
      complete: () => console.info('complete')
    });
  }
}
```

### Step 2: Update Template `item-list.component.html` to Display Data

```html
<div *ngIf="items.length">
  <ul>
    <li *ngFor="let item of items">{{ item.name }}</li>
  </ul>
</div>
<div *ngIf="!items.length">
  <p>No items available.</p>
</div>
```

---

### Step 3: Create a Component to Add Data
Run the following command to create a new component:

```bash
ng generate component add-item
```

This creates the following files:
- `add-item.component.ts`: Contains the logic for the component.
- `add-item.component.html`: Contains the template for the component.
- `add-item.component.css`: Contains the styles for the component.

#### Update `add-item.component.ts`

```typescript
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  standalone: true,
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  newItem: any = {};
  errorMessage: any = {};

  constructor(private apiService: ApiService, private router: Router) {}

  addItem(): void {
    this.apiService.createItem(this.newItem).subscribe({
      next: (res) => this.router.navigate(['/']),
      error: (err) => this.errorMessage = err
    });
  }
}
```

### Step 4: Update Template `add-item.component.html` to Add Data

```html
<div>
  <form (ngSubmit)="addItem()">
    <label for="name">Name:</label>
    <input type="text" [(ngModel)]="newItem.name" name="name" required>
    <p *ngIf="errorMessage.name" class="error">Error: {{ errorMessage.name.message }}</p> <br>

    <button type="submit">Add Item</button>
  </form>

</div>
```

### Step 5: Add Styles into `add-item.component.css` for Error Messages

```css
.error {
  color: red;
  font-weight: bold;
}
```
---
# Assignments
---

Please make sure to convert the "Books" assignment (available on the learning platform) and the Code Review assignment into Angular projects.
