import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	/** Based on the screen size, switch from standard to one column per row */
	cards = [];
	cardsForhandset = [];
	cardsForWeb = [];

	isHandset: boolean = false;
	isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return true;
			}

			return false;
		})
	);

	constructor(private breakpointObserver: BreakpointObserver,
		public appService: AppService) { }

	ngOnInit() {
		this.isHandsetObserver.subscribe(currentObserverValue => {
			this.isHandset = currentObserverValue;
			this.loadCards();
		})

		this.appService.getDeals().subscribe(
			response => {
				this.cardsForhandset = response.handsetCards;
				this.cardsForWeb = response.webCards;
				this.loadCards();

			},
			error => {
				alert('There was an error in receiving data from server. Please come again later!');

			}
		);
	}

	loadCards() {
		this.cards = this.isHandset ? this.cardsForhandset : this.cardsForWeb;
	}

	getImage(imageName: string): string {
		return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg' + ')';
	}
}
