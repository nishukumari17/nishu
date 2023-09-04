import { Component,Input } from '@angular/core';
import { NgbAlertConfig, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  providers: [NgbAlertConfig],
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(alertConfig: NgbAlertConfig) {
		// customize default values of alerts used by this component tree
		alertConfig.type = 'success';
		alertConfig.dismissible = false;
}
}
