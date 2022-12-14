import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { getLoginStatus, setUserName, setLoginStatus } from 'loginStatus/LS';
import { User } from '../login/user';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

	user!: User;
	post: any;
	constructor(private http: HttpClient, private route: ActivatedRoute,
		private router: Router,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}

	openSnackBar(message: string) {
		this._snackBar.open(message,"Dismiss",);
	  }

	addUser() {
		var email = document.querySelector('#usermail') as HTMLInputElement
		var password = document.querySelector('#password') as HTMLInputElement

		const body: User = {
			userID: 1010,
			userName: email.value,
			admin: false,
			userPassword: password.value
		}

		this.user = new User()

		this.post = this.http.post<any>('http://localhost:8093/user/add', body)
			.subscribe(d => {
				console.log(d)
			})
	}

	signUp() {
		var password = document.querySelector('#password') as HTMLInputElement
		var confirmPassword = document.querySelector('#confirmPassword') as HTMLInputElement

		if (password.value != confirmPassword.value) {
			this.openSnackBar('PASSWORDS DONT MATCH')
		}
		else {
			this.addUser()
			const sp = document.querySelector('#userMsg') as HTMLSpanElement
			this.router.navigate(['/login']);
		}
	}

}
