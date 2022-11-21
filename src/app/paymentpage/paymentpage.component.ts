import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  constructor(private router:Router,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
	this._snackBar.open(message,"Dismiss",);
  }

  book()
  {
    this.openSnackBar('BOOKING DONE')
    this.router.navigate(['bookings'])
	
  }

}
