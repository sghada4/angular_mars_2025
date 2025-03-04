import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  displayData!: User;
  constructor(private route: Router){
    const navigation = route.getCurrentNavigation()
    this.displayData = navigation?.extras?.state?.["userData"];
  }



}
