import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { setLoginStatus } from 'loginStatus/LS';
import { User } from './user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	[x: string]: any;
	posts :any ;
	user!: User;

	constructor(private http:HttpClient, private route: ActivatedRoute,
		private router: Router,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}

	openSnackBar(message: string) {
		this._snackBar.open(message,"Dismiss",);
	  }
	getPosts() {
		var email = document.querySelector('#usermail') as HTMLInputElement
		var password = document.querySelector('#password') as HTMLInputElement

		console.log(email.value)
		//CHECKS IF USER EXISTS
		const body: User = {
			userID: undefined,
			userName: email.value,
			admin: true,
			userPassword: ''
		}

		this.user = new User()
		
		this.posts = this.http.post<any>('http://localhost:8093/user/getByEmail', body)
			.subscribe(async d => {
				this.user = d;
				console.log(this.user)
				
				if (email.value === this.user.userName) {
					console.log(password.value)
					console.log(this.user.userPassword)
					if(password.value === this.user.userPassword){
						this.openSnackBar('LOGGED IN')
						const sp = document.querySelector('#userMsg') as HTMLSpanElement
						sp.textContent = 'Hi, '+this.user.userName
						setLoginStatus(true)
						this.router.navigate(['/adminhome']);
					}

					else{
						this.openSnackBar('INCORRECT PASSWORD')
					}
					console.log(true);
				}
				else
					console.log(false);
			})

	}
}
