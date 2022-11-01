import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from './hotel';


@Component({
	selector: 'app-hotels',
	templateUrl: './hotels.component.html',
	styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

	readonly ROOT_URL = 'http://localhost:8093';
	posts: any;
	roomCostMap : any= [];
	room : any = [];
	cost : any = [];
	hotel!: Hotel[];
	hotelChoice! : string;

	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		var list1 = document.getElementById('firstList') as HTMLSelectElement

		this.posts = this.http.get<any>('http://localhost:8093/room/get')
			.subscribe(d => {
				this.hotel = d;
				var i = 0;
				this.hotel.map(e => {
					this.room.push(e.hotelName)
					this.cost.push(e.roomRent)
					list1.options[i++] = new Option(e.hotelName)
				})
				console.log(this.hotel)
			})

			this.roomCostMap = [this.room,this.cost]

			var list2 = document.getElementById('secondList') as HTMLSelectElement
			list2.options[0] = new Option('1','1')
			list2.options[1] = new Option('2','2')
			list2.options[2] = new Option('3','3')
			list2.options[3] = new Option('4','4')

	}

	itemChanged() {
		var list1 = document.getElementById('firstList') as HTMLSelectElement
		this.hotelChoice = list1.options[list1.selectedIndex].text
	}

	finalizeBooking() {
		var list1 = document.getElementById('secondList') as HTMLSelectElement
		var headCount = list1.options[list1.selectedIndex].text
		var total= 1
		for(let i=0;i<this.roomCostMap[0].length;i++){
			if(this.roomCostMap[0][i] === this.hotelChoice){
				total = parseInt(this.roomCostMap[1][i])* parseInt(headCount)
			}
		}

		var totalText = document.getElementById('total') as HTMLHeadElement
		totalText.innerText = "Total Cost : "+total
	}

	updateCheckInDate() {
		const dateControl = document.getElementById('check-in') as HTMLInputElement
		console.log(dateControl.value)
	}

	updateCheckOutDate() {
		const dateControl = document.getElementById('check-out') as HTMLInputElement
		console.log(dateControl.value)
	}

	booking() {
		this.router.navigate(['paymentpage'])
		//alert("BOOKING CONFIRMED")
	}
}
