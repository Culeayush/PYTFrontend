import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
	posts: any;
	data = []

	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		const body: Bookings = {
			bookingId: '',
			pkg: 'string',
		}

		this.booking = new Bookings()

		this.posts = this.http.get<any>(`http://localhost:8093/user/getBooking/${1010}`)
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

	deletePackage(x: any) {
		console.log('del')
		this.post = this.http.delete<any>(`http://localhost:8093/user/delete/${x.packageID}`)
			.subscribe(async d => {
				console.log(d)
				console.log(x.packageID)

				var i = 0
				document.querySelectorAll('.tbody')
					.forEach(e => {
						if (e.querySelector(`.tbody:nth-child(${i}) > td`)?.textContent === x.packageID) {
							e.querySelector(`.tbody:nth-child(${i})`)?.remove()
						}
					})
			})
	}

}
