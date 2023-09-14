import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PchartComponent } from './pchart.component';

describe('PchartComponent', () => {
  let component: PchartComponent;
  let fixture: ComponentFixture<PchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PchartComponent]
    });
    fixture = TestBed.createComponent(PchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
