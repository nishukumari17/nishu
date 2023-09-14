import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { TestComponent } from './components/test/test.component';
import { ComponentComponent } from './components/component/component.component';
import { IconComponent } from './components/icon/icon.component';
import { ChartComponent } from './components/chart/chart.component';
import { PdfComponent } from './components/pdf/pdf.component';

import {  FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PdfViewerModule } from 'ng2-pdf-viewer';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgChartsModule } from 'ng2-charts';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { Graph4Component } from './components/graph4/graph4.component';
import { DragulaComponent } from './components/dragula/dragula.component';
import { DragulaModule } from 'ng2-dragula';
import { LazyloadComponent } from './components/lazyload/lazyload.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { PchartComponent } from './components/pchart/pchart.component';
import { ImgloaderComponent } from './components/imgloader/imgloader.component';
import * as dragula from 'dragula';

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
    
    CollapseComponent,
    NavigationComponent,
    TestComponent,
    ComponentComponent,
    IconComponent,
    ChartComponent,
    PdfComponent,
    VideoComponent,
    BarchartComponent,
    PiechartComponent,
    Graph4Component,
    DragulaComponent,
    LazyloadComponent,
    PchartComponent,
    ImgloaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    DatepickerComponent,
    NgChartsModule,
    YouTubePlayerModule,
    PdfViewerModule,
    DragulaModule.forRoot(),
    LazyLoadImageModule,
   
    
  ],
  providers: [
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }
  ],
  bootstrap: [AppComponent],
  exports: [VideoComponent]

})

export class AppModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    //platformBrowserDynamic().bootstrapModule(AppModule);
    
  }
}
