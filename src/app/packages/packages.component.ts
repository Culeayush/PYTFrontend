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
	data = []

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
}


