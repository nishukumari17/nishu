import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { AppComponent } from './app.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library for convenient access in other components
//import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  faCoffee = faCoffee;
  title = 'app';
isSyncAnimated: boolean | undefined;
magicLevel: any;
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIconPacks(fas);
    library.addIcons(fasStar);
  }
}
