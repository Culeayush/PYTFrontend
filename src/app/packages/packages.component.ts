import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/packages/Package'

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

	book(){
		var id = document.querySelector('#packageID') as HTMLInputElement
		var name = document.querySelector('#packageName') as HTMLInputElement
		var cost = document.querySelector('#packageCost') as HTMLInputElement

		console.log(id.value + ' ' + name.value + " " + cost.value)

		const body: Package = {
			packageID: parseInt(id.value + ''),
			packageName: name.value,
			packageCost: cost.value
		}

		this.posts = this.http.post<any>('http://localhost:8093/bookings/add', body)
		.subscribe(d=>{
			console.log(d)
		})
		this.ngOnInit()
		// this.post = this.http.get<any>('http://localhost:8093/package/get')
		// .subscribe(d => {
		// 	this.items = d;
		// })
		console.log(this.items)
		

		id.value = ''
		name.value = ''
		cost.value = ''

		this.router.navigate(['/paymentpage'])
	}
}


