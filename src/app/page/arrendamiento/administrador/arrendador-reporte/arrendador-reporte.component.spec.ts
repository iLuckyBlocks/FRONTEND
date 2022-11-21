import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorReporteComponent } from './arrendador-reporte.component';

describe('ArrendadorReporteComponent', () => {
  let component: ArrendadorReporteComponent;
  let fixture: ComponentFixture<ArrendadorReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendadorReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendadorReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
