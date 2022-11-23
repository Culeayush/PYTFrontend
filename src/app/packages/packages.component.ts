import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/packages/Package'
import { Bookings } from '../bookings/Bookings';

@Component({
	selector: 'app-packages',
	templateUrl: './packages.component.html',
	styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

	package!: Package;
	posts: any;
	data = [];
	items = []

	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		const body: Package = {
			packageID: '',
			packageName: 'string',
			packageCost: ''
		}

		this.package = new Package()

		this.posts = this.http.get<any>('http://localhost:8093/package/get')
			.subscribe(async d => {
				this.data = d;
				console.log(this.data)

			})
	}

	book(packageID: any) {
		document.querySelectorAll("section > div").forEach(e => {
			var v = e.querySelector("p") as HTMLParagraphElement
			if (v.textContent === packageID+'') {
				var id = e.querySelector('#packageId') as HTMLParagraphElement
				var name = e.querySelector('#packageNAME') as HTMLParagraphElement
				var cost = e.querySelector('#packageCOST') as HTMLParagraphElement
				console.log('vals : '+id.textContent + ' ' + name.textContent + " " + cost.textContent)
				
				const body: Bookings = {
					packageID: id.textContent,
					packageName: name.textContent,
					packageCost: cost.textContent
				}
		
				this.posts = this.http.post<any>('http://localhost:8093/bookings/add', body)
					.subscribe(d => {
						console.log(d)
					})
				this.ngOnInit()
			}
			return e
		})



		console.log(packageID)
		
		// this.post = this.http.get<any>('http://localhost:8093/package/get')
		// .subscribe(d => {
		// 	this.items = d;
		// })
		console.log(this.items)



		this.router.navigate(['/paymentpage'])
	}
}


