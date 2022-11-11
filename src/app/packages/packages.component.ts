import { Component, OnInit } from '@angular/core';

let data = [
  {
    name: "abc",
    image: "src_link",
    price: 500,
  },
  {
    name: "abc",
    image: "src_link",
    price: 400,
  },
  {
    name: "abc",
    image: "src_link",
    price: 2000,
  },
  {
    name: "abc",
    image: "src_link",
    price: 500,
  },
]


data.map(d => {
  console.log(d.price)
})




@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
