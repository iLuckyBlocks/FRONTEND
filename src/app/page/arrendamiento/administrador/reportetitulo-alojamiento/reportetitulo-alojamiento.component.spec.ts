import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportetituloAlojamientoComponent } from './reportetitulo-alojamiento.component';

describe('ReportetituloAlojamientoComponent', () => {
  let component: ReportetituloAlojamientoComponent;
  let fixture: ComponentFixture<ReportetituloAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportetituloAlojamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportetituloAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
