import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { Book } from './book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular';
  allBooks: Book[]=[]
  onNotify(books: Book[]){
    this.allBooks = books
  }
}
