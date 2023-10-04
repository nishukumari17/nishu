import { Component } from '@angular/core';
import notice from './notice.json';
interface Important{
  title:String,
  notice:String,
  home: String,
  new: String,
  date?:any
}
@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent {
notices:Important[]=notice;
ngOnInit(){
    console.log(this.notices);
    }
}
