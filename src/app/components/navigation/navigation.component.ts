import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [
		`
			.close {
				font-size: 1.4rem;
				opacity: 0.1;
				transition: opacity 0.3s;
			}
			.nav-link:hover > .close {
				opacity: 0.8;
			}
		`,
	],
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  tabs = [1, 2, 3, 4, 5];
	counter = this.tabs.length + 1;
	active: any;

	close(event: MouseEvent, toRemove: number) {
		this.tabs = this.tabs.filter((id) => id !== toRemove);
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	add(event: MouseEvent) {
		this.tabs.push(this.counter++);
		event.preventDefault();
	}
}
