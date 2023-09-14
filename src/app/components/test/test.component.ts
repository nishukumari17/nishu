import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  roll:number=10;
  name:String="Nishu";
  result:boolean=true;
  array:number[]=[5,7,8,9,2]
  ngOnInit(){
      console.log(this.roll)
      console.log(this.name)
      console.log(this.result)
      console.log(this.array)
  }
}
