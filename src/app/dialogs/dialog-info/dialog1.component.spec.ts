import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoComponent } from './dialog1.component';

describe('DialogInfoComponent', () => {
  let component: DialogInfoComponent;
  let fixture: ComponentFixture<DialogInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInfoComponent]
    });
    fixture = TestBed.createComponent(DialogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
