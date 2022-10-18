import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  title = 'Hotel Bookings';
  myImage:string = 'assets/hot.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
