import { Component } from '@angular/core';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.css']
})
export class HideShowComponent {
  status:boolean=true;
  page:number=1;
  ngOnInit(){
    console.log(this.status);
    console.log(this.page);
  }
  fun(){
    this.status=false;
  }
  fun2(){
    this.status=true;
  }
  hs(){
    if(this.status==true){
      this.status=false;
    }
    else{
      this.status=true;
    }
  }
  pages(){
    //this.page=this.page+1;
   // this.page++;
   this.page+=1;
  }
  pages_d(){
   // this.page=this.page-1;
   if(this.page<=1){
        this.page=1;
   }
   else{
    this.page--;
   }
  }
}
