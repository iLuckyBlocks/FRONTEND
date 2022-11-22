import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoalertComponent } from './dialogoalert.component';

describe('DialogoalertComponent', () => {
  let component: DialogoalertComponent;
  let fixture: ComponentFixture<DialogoalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
