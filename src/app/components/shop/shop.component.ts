import { Component } from '@angular/core';
import data from './placement.json';


  interface Placed{
  
  id:Number,
  BoardRoll:Number,//String or Number | means OR
  Name:any,
  Company:String,
  
}
interface PlacedData{
  mechanical:Placed[],
 electrical:Placed[],
 metallurgy:Placed[],
 cse:Placed[]


}
interface PlacedStudents{
  current:PlacedData
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  placement:PlacedStudents=data;
  ngOnInit(){
    console.log(this.placement);
    }
 
}
