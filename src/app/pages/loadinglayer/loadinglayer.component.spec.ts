import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinglayerComponent } from './loadinglayer.component';

describe('LoadinglayerComponent', () => {
  let component: LoadinglayerComponent;
  let fixture: ComponentFixture<LoadinglayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadinglayerComponent]
    });
    fixture = TestBed.createComponent(LoadinglayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
