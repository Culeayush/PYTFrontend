import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../packages/Package';

@Component({
	selector: 'app-adminhome',
	templateUrl: './adminhome.component.html',
	styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

	showadd = true
	showupdate = false
	addEdit = false

	item!: any
	items = []
	paCkage!: Package
	post: any

	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		this.add()
		this.post = this.http.get<any>('http://localhost:8093/package/get')
			.subscribe(async d => {
				this.items = d;
				console.log(this.items)
			})
	}

	addPackage() {
		this.addEdit = true
		console.log(this.showadd + ' ' + this.showupdate)
		this.add()
		const modal = document.querySelector("#adminModal") as HTMLDivElement
		modal.style.display = "flex";

		var id = document.querySelector('#packageID') as HTMLInputElement
		var name = document.querySelector('#packageName') as HTMLInputElement
		var cost = document.querySelector('#packageCost') as HTMLInputElement

		id.value = ''
		name.value = ''
		cost.value = ''
	}

	updatePackage(x: any) {
		this.addEdit = false
		this.item = x
		this.update()
		const modal = document.querySelector("#adminModal") as HTMLDivElement
		modal.style.display = "flex";

		if (!this.addEdit) {
			var id = document.querySelector('#packageID') as HTMLInputElement
			var name = document.querySelector('#packageName') as HTMLInputElement
			var cost = document.querySelector('#packageCost') as HTMLInputElement

			id.value = this.item.packageID
			name.value = this.item.packageName
			cost.value = this.item.packageCost

			console.log(id.value + ' ' + name.value + " " + cost.value)
		}
	}

	deletePackage(x: any) {
		console.log('del')
		this.post = this.http.delete<any>(`http://localhost:8093/package/delete/${x.packageID}`)
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

	closeModal() {
		const modal = document.querySelector("#adminModal") as HTMLDivElement
		modal.style.display = "none";
	}

	add() {
		this.showadd = true
		this.showupdate = false
	}

	update() {
		this.showadd = false
		this.showupdate = true
	}

	saveOnClick() {
		var id = document.querySelector('#packageID') as HTMLInputElement
		var name = document.querySelector('#packageName') as HTMLInputElement
		var cost = document.querySelector('#packageCost') as HTMLInputElement

		console.log(id.value + ' ' + name.value + " " + cost.value)

		const body: Package = {
			packageID: parseInt(id.value + ''),
			packageName: name.value,
			packageCost: cost.value
		}

		this.post = this.http.post<any>('http://localhost:8093/package/add', body)
		.subscribe(d=>{
			console.log(d)
		})
		this.ngOnInit()
		// this.post = this.http.get<any>('http://localhost:8093/package/get')
		// .subscribe(d => {
		// 	this.items = d;
		// })
		console.log(this.items)
		this.closeModal()

		id.value = ''
		name.value = ''
		cost.value = ''
	}

	updateOnClick(x: any) {

	}
}
