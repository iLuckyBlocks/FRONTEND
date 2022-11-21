import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoArrComponent } from './dialogo-arr.component';

describe('DialogoArrComponent', () => {
  let component: DialogoArrComponent;
  let fixture: ComponentFixture<DialogoArrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoArrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
