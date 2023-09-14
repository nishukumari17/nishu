import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent} from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { MdComponent} from './components/md/md.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoticeComponent } from './components/notice/notice.component';
import { PlacementComponent } from './components/placement/placement.component';
import {FaqComponent } from './components/faq/faq.component';
import {ComponentComponent } from './components/component/component.component';




const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'home', component:HomeComponent},
  {path: 'faculty', component:FacultyComponent},
  {path: 'md', component:MdComponent},
  {path: 'grievance', component:GrievanceComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'admission', component:AdmissionComponent},
  {path: 'placement', component:PlacementComponent},
  {path: 'notice', component:NoticeComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'component', component:ComponentComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
