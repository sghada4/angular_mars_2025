
# TypeScript & Angular Project Guide

## TypeScript Basics for Angular Projects

### 1. **Types in TypeScript**
TypeScript offers static typing, which helps catch errors during development. Common types include:

- **Basic Types**: `string`, `number`, `boolean`, `any`, `void`, `null`, `undefined`
- **Arrays**: `number[]`, `string[]`, or using generic syntax `Array<number>`
- **Tuples**: Fixed-length arrays, e.g., `[string, number]`
- **Enums**: Used for named constants, e.g., 
  ```typescript
  enum Color { Red, Green, Blue }
  let c: Color = Color.Green;
  ```
- **Union Types**: A variable can hold multiple types, e.g., `string | number`.
  ```typescript
  id = string | number;
  ```

### 2. **Interfaces**
Interfaces define the structure of an object or class, ensuring type safety.

#### Example:
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
};
```

### 3. **Classes**
Classes in TypeScript are similar to those in ES6 but include typing and access modifiers.

#### Example:
```typescript
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice");
console.log(person.greet());
```

---
### 4. **Run TypeScript**
1. Install TypeScript:
   ```bash
    npm install -g typescript
   ```

2. Verify installation
   ```bash
    tsc --version
    ```
   
3. Compile the TypeScript File
  ```bash
    tsc fileName.ts
  ```

4. Run the JavaScript File
  ```bash
    node fileName.js
  ```

---
## Starting an Angular Project

### 1. **Create a New Angular Project**
1. Install Angular CLI if not already installed:
   ```bash
   npm install -g @angular/cli
   ```
2. Create a new Angular project:
   ```bash
   ng new my-angular-app
   ```
   - Follow the prompts to set up the project (e.g., routing and CSS framework).

3. Navigate to the project directory:
   ```bash
   cd my-angular-app
   ```
4. Start the development server:
   ```bash
   ng serve
   ```

   Open your browser at [http://localhost:4200](http://localhost:4200).

### 2. **Display Data in the App Component**
1. Open `src/app/app.component.ts` and modify the `title` property:
   ```typescript
   title = 'My Angular Application';
   ```
2. In `src/app/app.component.html`, bind the `title` property using Angular interpolation:
   ```html
   <h1>{{ title }}</h1>
   ```

### 3. **Create a New Component**
1. Generate a new component using Angular CLI:
   ```bash
   ng generate component my-component
   ```
   This will create:
   - `my-component.component.ts`
   - `my-component.component.html`
   - `my-component.component.css`
   - `my-component.component.spec.ts`

2. Open `my-component.component.ts` and add a new property:
   ```typescript
   export class MyComponentComponent {
     message = 'Welcome to My Component!';
   }
   ```

3. Bind the `message` property in `my-component.component.html`:
   ```html
   <p>{{ message }}</p>
   ```

### 4. **Display the New Component in the App Component**
1. Import `MyComponentComponent` in `src/app/app.component.ts`
  ```typescript
  @Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  })
  ```

2. Add the `<app-my-component>` selector to `app.component.html`:
   ```html
   <h1>{{ title }}</h1>
   <app-my-component></app-my-component>
   ```


### 5. **Display a list in the New Component**
1. Import `CommonModule` in `my-component.component.ts`
    ```typescript
    @Component({
    selector: 'app-my-component',
    imports: [CommonModule],
    templateUrl: './my-component.component.html',
    styleUrl: './my-component.component.css',
    })
    ```
    
2. Define a list of books in `my-component.component.ts`:
   ```typescript
   books = [
     { id: 1, name: 'Book 1', nbPages: 180 },
     { id: 2, name: 'Book 2', nbPages: 245 },
     { id: 3, name: 'Book 3', nbPages: 366 },
   ];
   ```

3. Display the books in a table in `my-component.component.html`:
   ```html
   <table>
     <thead>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Number of Pages</th>
       </tr>
     </thead>
     <tbody>
       <tr *ngFor="let book of books">
         <td>{{ book.id }}</td>
         <td>{{ book.name }}</td>
         <td>{{ book.nbPages }}</td>
       </tr>
     </tbody>
   </table>
   ```
---

To use **Bootstrap** in an Angular project, follow these steps:

---

### Step 1: **Install Bootstrap**
You can add Bootstrap to your Angular project using **npm**. Open your terminal and run:

```bash
npm install bootstrap
```

This will add Bootstrap to your project's `node_modules`.

---

### Step 2: **Add Bootstrap CSS**
In your Angular project, open the `angular.json` file and add the Bootstrap CSS file path to the `styles` array.

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

If you're using SCSS, replace `styles.css` with `styles.scss`.

---

### Step 3: (Optional) **Add Bootstrap JavaScript**
If you need Bootstrap's JavaScript functionalities (e.g., modals, tooltips, dropdowns), you also need to include its JavaScript dependencies: **Popper.js** and **Bootstrap's JS**.

Install them via npm:

```bash
npm install @popperjs/core
```

Then, in `angular.json`, add the Bootstrap JavaScript file to the `scripts` array:

```json
"scripts": [
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

---

### 6. **Communicate Data Between Components**
#### Parent to Child
1. Modify `my-component.component.ts` to accept an input:
   ```typescript
   import { Component, Input } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     templateUrl: './my-component.component.html',
     styleUrls: ['./my-component.component.css']
   })
   export class MyComponentComponent {
     @Input() parentMessage: string = '';
   }
   ```

2. Bind the input property in `app.component.html`:
   ```html
   <app-my-component [parentMessage]="title"></app-my-component>
   ```

3. Display the parent message in `my-component.component.html`:
   ```html
   <p>Message from parent: {{ parentMessage }}</p>
   ```

#### Child to Parent
1. Create interface for `Book`
   ```bash
    ng generate interface book
   ```

2. Add an `@Output` property in `my-component.component.ts`:
   ```typescript
   import { Component, EventEmitter, Output } from '@angular/core';
   import {Book} from "../book"
   
   @Component({
     selector: 'app-my-component',
     templateUrl: './my-component.component.html',
     styleUrls: ['./my-component.component.css']
   })
   export class MyComponentComponent {
     @Output() notifyParent = new EventEmitter<Book[]>();

     sendBooks() {
       this.notifyParent.emit(this.books);
     }
   }
   ```

3. Add a button in `my-component.component.html`:
   ```html
   <button (click)="sendBooks()">Send Books</button>
   ```

4. Handle the event in `app.component.html`:
   ```html
   <app-my-component (notifyParent)="onNotify($event)"></app-my-component>
   ```

5. Implement the `onNotify` method in `app.component.ts`:
   ```typescript
   import {Book} from "./book"
   allBooks: Book[]= []
   onNotify(books: Book[]) {
     this.allBooks= books
   }
   ```

---

### **Assignment 1: Building Your First Angular Component**
#### Objective:
Understand how to create and use components in Angular.

#### Tasks:
1. **Setup**:
   - Create a new Angular project named `student-app`.

2. **App Component**:
   - Modify the `title` property in `app.component.ts` to `Welcome to Student App!`
   - Display the title in `app.component.html`.

3. **Custom Component**:
   - Generate a new component named `student-list`.
   - In `student-list.component.ts`, add an array of students with the following structure:
     ```typescript
     students = [
       { id: 1, name: 'Alice', age: 22 },
       { id: 2, name: 'Bob', age: 24 },
       { id: 3, name: 'Charlie', age: 23 }
     ];
     ```
   - In `student-list.component.html`, display the list of students using an `*ngFor` directive.

4. **Integrate Component**:
   - Add the `<app-student-list>` selector to `app.component.html` to display the new component.

#### Submission:
Provide a link to the GitHub repository with the Angular project files.

---

### **Assignment 2: Parent-Child Component Communication**
#### Objective:
Learn how to pass data between parent and child components.

#### Tasks:
1. **Parent to Child**:
   - In the `student-list` component, add an `@Input` property named `course`.
   - Modify `student-list.component.html` to display the course name at the top.
   - Pass the course name (`"Full-Stack Development"`) from the parent `app.component.html`.

2. **Child to Parent**:
   - Add a button in `student-list.component.html` labeled `Notify Parent`.
   - Emit an event from `student-list` to `app.component` with the message: `"Student list has been updated!"`.
   - Handle the event in `app.component.ts` and log the message in the console.

#### Submission:
Submit the updated Angular project with the `student-list` component demonstrating both types of communication.

---

### **Assignment 3: Create a Product Dashboard**
#### Objective:
Build a simple product dashboard with multiple components.

#### Tasks:
1. **Setup**:
   - Create a new Angular project named `product-dashboard`.

2. **Components**:
   - Generate components for `product-list`, `product-details`, and `product-summary`.

3. **Product List**:
   - In `product-list.component.ts`, add a list of products with the following properties:
     - `id`, `name`, `price`, `description`
   - Use `*ngFor` to display the products in `product-list.component.html`.

4. **Product Details**:
   - Use `@Input` to pass a product from `product-list` to `product-details`.
   - Display detailed information about the selected product in `product-details.component.html`.

5. **Product Summary**:
   - Calculate the total number of products and their average price in `product-summary.component.ts`.
   - Display these statistics in `product-summary.component.html`.

6. **Integration**:
   - Include all three components in `app.component.html` and ensure they work together seamlessly.

#### Submission:
Provide a link to the GitHub repository containing the complete `product-dashboard` project.

---

# Routing and Handling Forms

---

### 1. Create Components
#### Command to Generate Components:
```bash
ng generate component home
ng generate component about
ng generate component contact
ng generate component profile
ng generate component form
ng generate component display
```

---

### 2. Configure Routing
#### Add Routing Module:
- Open the `app-routes.ts` file.
- Define routes for the components:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

```

#### Update `app.component.html`:
Add a navigation bar and `<router-outlet>` for routing.

```html
  <div class="d-flex justify-content-around navbar navbar-expand-lg bg-light mb-4">
    <a class="nav-link" routerLink="/">Home</a> | 
    <a class="nav-link" routerLink="/about">About</a> | 
    <a class="nav-link" routerLink="/contact">Contact</a> | 
    <a class="nav-link" routerLink="/profile/{{id}}">Profile</a> | 
    <a class="nav-link" routerLink="/form">Form</a>
  </div>
  
  <router-outlet></router-outlet>
```

Import `RouterOutlet` and `RouterModule` in `app.component.ts`

```typescript
  import { Component } from '@angular/core';
  import { RouterModule, RouterOutlet } from '@angular/router';
  
  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    id: number = 1;
  }
```

#### Retrieve the ID in `ProfileComponent` 

Inside `ProfileComponent`, use `ActivatedRoute` to capture the ID from the URL:  

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
```
🔹 The `ActivatedRoute` service allows us to **access route parameters**.  
🔹 `this.route.snapshot.paramMap.get('id')` retrieves the `id` from the URL.  
🔹 We convert it to a **number** using `Number()` before storing it in `this.id`.

---

### 3. Create a Form Component
#### Create interface for object type:
```bash
  ng generate interface user
```

#### Add Fields:
```typescript
  export interface User {
  name: string;
  email: string;
  }
```

#### Handle Form Data in `form.component.ts`:
Add a method to send form data to another component.

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newUser: User = {name: "", email: ""};
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/display'], { state: { userData: this.newUser } });
  }
}

```

#### Add Form Controls:
- Open `form.component.html` and add a form:

```html
<div class="mx-5">
    <h1>User Form</h1>
    <form (ngSubmit)="onSubmit()" class="col-3 ">
        <div class="form-group mb-3">
            <label >Name</label>
            <input class="form-control" name="name" [(ngModel)]="newUser.name" type="text">
            
        </div>
        <div class="form-group mb-3">    
            <label >Email</label>
            <input class="form-control" name="email" [(ngModel)]="newUser.email" type="email">
        </div>
        <button class="btn btn-primary btn-lg w-100" type="submit" >Create</button>
    </form>
</div>
```

---

### 4. Display Submitted Data
#### Access Data in `display.component.ts`:
Retrieve and display the form data passed via the router's state.

```typescript
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { User } from '../user';
  
  @Component({
    selector: 'app-display',
    imports: [],
    templateUrl: './display.component.html',
    styleUrl: './display.component.css'
  })
  export class DisplayComponent {
    displayData: User
    constructor(private router: Router){
      const navigation = this.router.getCurrentNavigation();
      this.displayData = navigation?.extras?.state?.["userData"] || {};
    }
  }
```

#### Display Data in `display.component.html`:
Render the submitted data.

```html
  <div class="mx-5">
      <h2>Submitted Data</h2>
      <p> <strong>Name: </strong> {{displayData.name}} </p>
      <p> <strong>Email: </strong> {{displayData.email}} </p>
  </div>
```

---

### **Assignment 1: User Profile Submission App**

**Objective**:  
Build an Angular application with a form to collect user profile data and a display component to show the submitted information. This assignment will help you practice working with Angular components, routing, forms, and data passing between components.

---

**Description**:  
You are tasked with creating a simple user profile submission app that includes the following features:  

1. **FormComponent**:  
   - Create a form to collect user profile data with the following fields:  
     - Full Name (text input).  
     - Age (number input).  
     - Gender (dropdown selection with options: Male, Female, Other).  
     - Email Address (email input).  
     - Is Subscribed (checkbox to indicate subscription preference).  
   - Upon submission, navigate to the display page and pass the collected data.  

2. **DisplayComponent**:  
   - Retrieve the submitted data passed from the form.  
   - Display the data in a user-friendly format, clearly showing each field and its value.  

3. **Routing**:  
   - Configure routing so that:  
     - `/form` displays the form page (default route).  
     - `/display` displays the submitted profile information.  
   - Add a navigation bar for easy switching between routes.

---

### **Assignment 2: Product Feedback Submission App**

**Objective**:  
Develop an Angular application that allows users to submit product feedback and displays the submitted information on a separate page. This assignment will help you solidify your understanding of Angular components, forms, routing, and data sharing.

---

**Description**:  
Create an app with the following functionality:

1. **FormComponent**:  
   - Create a form to collect product feedback with the following fields:  
     - Product Name (text input).  
     - Rating (number input).  
     - Feedback (textarea).  
     - Email (email input).  
     - Would Recommend (radio buttons with options: Yes, No).  
   - Upon submission, navigate to the display page and pass the feedback data.

2. **DisplayComponent**:  
   - Retrieve and display the submitted feedback data, clearly showing each field and its value.  
   - Format the information in a visually structured way, e.g., using headings and bullet points.

3. **Routing**:  
   - Configure routing so that:  
     - `/form` is the default route and shows the feedback form.  
     - `/display` shows the feedback details page.  
   - Include a navigation bar for easy switching between routes.

---

# **Use JavaScript Files in angular**
If you have a custom JavaScript file, you can include it in the `angular.json` file.

## Steps:
### 1. Create your JavaScript `custom-script.js` file in `src/assets/js`
### 2. Add the path to the JavaScript file under the `scripts` array:
```json
"scripts": [
  "src/assets/js/custom-script.js"
]
```

### 3. Use the functions defined in the file within your component:
```typescript
declare var customFunction: any;

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  executeExternalScript(): void {
    customFunction();
  }
}
```
