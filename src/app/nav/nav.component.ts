import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { getLoginStatus,getUserName, setLoginStatus } from 'loginStatus/LS';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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

	constructor(private breakpointObserver: BreakpointObserver) { }

	logOut() {
		setLoginStatus(false)
		console.log("first")
	}

}
