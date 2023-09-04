import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsgComponent } from './pmsg.component';

describe('PmsgComponent', () => {
  let component: PmsgComponent;
  let fixture: ComponentFixture<PmsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmsgComponent]
    });
    fixture = TestBed.createComponent(PmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
