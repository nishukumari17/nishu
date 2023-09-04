import { Component } from '@angular/core';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  // standalone: true,
	// imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
  
})
export class DatepickerComponent {
  // model: NgbDateStruct;
	// date: { year: number; month: number };
  
	constructor(private calendar: NgbCalendar) {}

	selectToday() {
		// this.model = this.calendar.getToday();
	}
}





