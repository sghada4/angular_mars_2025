import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  id!: number ;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('userId'));
    console.log(this.id)
  }

}
