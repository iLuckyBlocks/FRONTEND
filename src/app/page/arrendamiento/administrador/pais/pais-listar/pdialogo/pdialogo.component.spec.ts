import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdialogoComponent } from './pdialogo.component';

describe('PdialogoComponent', () => {
  let component: PdialogoComponent;
  let fixture: ComponentFixture<PdialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
