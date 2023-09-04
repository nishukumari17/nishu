import { Component } from '@angular/core';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-timepicker',
  //standalone: true,
  //imports: [NgbTimepickerModule, FormsModule, JsonPipe],
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
	seconds = true;

	toggleSeconds() {
		this.seconds = !this.seconds;
	}
}

