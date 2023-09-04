import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BranchComponent } from './components/branch/branch.component';
import { PmsgComponent } from './components/pmsg/pmsg.component';
import { LogoComponent } from './components/logo/logo.component';
import { SlideComponent } from './components/slide/slide.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NoticeComponent } from './components/notice/notice.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { MdComponent } from './components/md/md.component';
import { PlacementComponent } from './components/placement/placement.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ToastComponent } from './components/toast/toast.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TableComponent } from './components/table/table.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { RatingComponent } from './components/rating/rating.component';
import { AlertComponent } from './components/alert/alert.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { PopoverComponent } from './components/popover/popover.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { NavComponent } from './components/nav/nav.component';
import { ModelComponent } from './components/model/model.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmissionComponent,
    AboutComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    BranchComponent,
    PmsgComponent,
    LogoComponent,
    SlideComponent,
    PrincipalComponent,
    NoticeComponent,
    FacultyComponent,
    MdComponent,
    PlacementComponent,
    GrievanceComponent,
    ContactComponent,
    FaqComponent,
    TypeaheadComponent,
    TooltipComponent,
    ToastComponent,
    TimepickerComponent,
    TableComponent,
    ScrollspyComponent,
    RatingComponent,
    AlertComponent,
    CarouselComponent,
    ProgressbarComponent,
    PopoverComponent,
    PaginationComponent,
    OffcanvasComponent,
    NavComponent,
    ModelComponent,
    DropdownComponent,
    DatepickerComponent,
    CollapseComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
