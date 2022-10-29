import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Flight } from './Flights';
import { Map } from './Map';

@Component({
	selector: 'app-flights',
	templateUrl: './flights.component.html',
	styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

	posts: any;
	flight!: Flight;
	locationDestinationMap: any = [];
	currentLocation: any = "";
	cMap: any = [];

	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		var flightData: Flight[];
		var list1 = document.getElementById('firstList') as HTMLSelectElement

		this.posts = this.http.get<any>('http://localhost:8093/flight/get')
			.subscribe(d => {
				console.log(d)
				flightData = d
				var i = 0
				flightData.map(e => {
					var loc = e.location
					var d = [e.destinations, e.costs]
					var temp = { location: loc, destination: d }
					this.locationDestinationMap.push(temp)
					list1.options[i++] = new Option(e.location, e.location)
				})
				
				console.log(this.locationDestinationMap)
				// console.log(this.locationDestinationMap[0].destination)

			})
	}

	itemChanged() {
		var select1 = document.getElementById('firstList') as HTMLSelectElement
		var select2 = document.getElementById('secondList') as HTMLSelectElement
		this.currentLocation = select1.options[select1.selectedIndex].text

		//CLEAR ITEMS
		for(let i = 0; i < select2.options.length; i++) {
			select2.options[i].remove()
		}

		console.log("SELECTED "+this.currentLocation)
		
		for (let i = 0; i < this.locationDestinationMap.length; i++) {
			if (this.currentLocation === this.locationDestinationMap[i].location) {
				this.cMap = this.locationDestinationMap[i].destination[1]
				for(let j=0; j<this.locationDestinationMap[i].destination[0].length;j++){
					select2.options[j] = new Option(this.locationDestinationMap[i].destination[0][j], this.locationDestinationMap[i].destination[0][j])
				}
			}
		}

	}

	finalizeBooking(){
		var total = document.getElementById('total') as HTMLHeadElement
		var select2 = document.getElementById('secondList') as HTMLSelectElement
		var index = select2.selectedIndex

		// console.log(this.cMap[index])

		total.innerText = 'Total Cost : '+this.cMap[index]
	
	}

	updateDate(){
		const dateControl = document.getElementById('bookingDate') as HTMLInputElement
		console.log(dateControl.value)

	}

	booking(){
		alert("BOOKING CONFIRMED")
	}
}
