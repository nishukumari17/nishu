import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgloaderComponent } from './imgloader.component';

describe('ImgloaderComponent', () => {
  let component: ImgloaderComponent;
  let fixture: ComponentFixture<ImgloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgloaderComponent]
    });
    fixture = TestBed.createComponent(ImgloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
