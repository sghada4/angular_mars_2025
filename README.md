
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
