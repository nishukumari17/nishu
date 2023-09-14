import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph4Component } from './graph4.component';

describe('Graph4Component', () => {
  let component: Graph4Component;
  let fixture: ComponentFixture<Graph4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Graph4Component]
    });
    fixture = TestBed.createComponent(Graph4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
