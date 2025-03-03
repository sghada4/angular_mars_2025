import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-component',
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  @Input() parentTitle: string ="";
  @Output() notifyParent = new EventEmitter<Book[]>
message: string = "Welcome to my component";

books: Book[] = [
  {id: 1, title: "Book 1", nbPages:100},
  {id: 2, title: "Book 2", nbPages:200},
  {id: 3, title: "Book 3", nbPages:300}
]
sendBooks(){
  this.notifyParent.emit(this.books);
}
}
