import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newUser: User ={name:"", email: "", age:0}
  constructor(private route: Router){}
  onSubmit(){
    console.log(this.newUser)
    this.route.navigate(['/display'], {state:{userData: this.newUser}})
  }
}
