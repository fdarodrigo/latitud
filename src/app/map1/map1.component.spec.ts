import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map1Component } from './map1.component';

describe('Map1Component', () => {
  let component: Map1Component;
  let fixture: ComponentFixture<Map1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Map1Component]
    });
    fixture = TestBed.createComponent(Map1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
