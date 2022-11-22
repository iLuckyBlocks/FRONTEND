import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEsComponent } from './dialogo-es.component';

describe('DialogoEsComponent', () => {
  let component: DialogoEsComponent;
  let fixture: ComponentFixture<DialogoEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
