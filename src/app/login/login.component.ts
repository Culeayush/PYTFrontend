import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLoginStatus, setUserName, setLoginStatus } from 'loginStatus/LS';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	readonly ROOT_URL = 'http://localhost:8093';
	posts :any ;
	user!: User;

	constructor(private http:HttpClient, private route: ActivatedRoute,
		private router: Router,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}

	openSnackBar(message: string) {
		this._snackBar.open(message,"Dismiss",);
	  }

	getPosts(){
		var email = document.querySelector('#usermail') as HTMLInputElement
		var password = document.querySelector('#password') as HTMLInputElement

		// this.posts = this.http.get<any>(this.ROOT_URL+'/user/get')
		// .subscribe(data => console.log(data))
		console.log(email.value)
		//CHECKS IF USER EXISTS
		const body: User = {
			userID: undefined,
			userName: email.value,
			admin: false,
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
						this.router.navigate(['/home']);
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
