import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  book()
  {
    alert('BOOKING DONE')
    this.router.navigate(['home'])
  }

}
