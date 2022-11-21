import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { getLoginStatus,getUserName, setLoginStatus } from 'loginStatus/LS';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent {

	username: string = getUserName()
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);

	constructor(private breakpointObserver: BreakpointObserver,private router: Router) { }

	logOut() {
		setLoginStatus(false)
		this.router.navigate(['/home'])
		console.log("first")
	}

}
