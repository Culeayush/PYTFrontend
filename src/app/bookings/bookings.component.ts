import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../packages/Package';
import { Bookings } from './Bookings';

@Component({
	selector: 'app-bookings',
	templateUrl: './bookings.component.html',
	styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
	[x: string]: any;

	showadd = true
	showupdate = false
	addEdit = false

	item!: any
	items = []
	bookings!: Bookings
	post: any

	booking!: Bookings;
	package!: Package;
	posts: any;
	data = []

	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
		const body: Package = {
			packageID: '',
			packageName: '',
			packageCost: ''
		}

		this.package = new Package()

		this.posts = this.http.get<any>('http://localhost:8093/bookings/get')
			.subscribe(async d => {
				this.data = d;
				console.log(this.data)

			})
	}

	add() {
		this.showadd = true
		this.showupdate = false
	}

	update() {
		this.showadd = false
		this.showupdate = true
	}

	openSnackBar(message: string) {
		this._snackBar.open(message,"Dismiss",);
	  }
	deletePackage(x: any) {
		this.post = this.http.delete<any>(`http://localhost:8093/bookings/delete/${x.packageID}`)
			.subscribe(async d => {
				console.log(d)
				console.log(x.packageID)
			})

		document.querySelectorAll('.tbody')
			.forEach(e => {
				console.log(e.id)
				console.log(e.textContent)
				if (e.id === x.packageID + '') {
					e.remove()
				}
			})

			this.openSnackBar('BOOKING DELETED')
	}

}
