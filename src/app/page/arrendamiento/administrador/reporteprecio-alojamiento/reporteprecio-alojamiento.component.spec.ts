import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteprecioAlojamientoComponent } from './reporteprecio-alojamiento.component';

describe('ReporteprecioAlojamientoComponent', () => {
  let component: ReporteprecioAlojamientoComponent;
  let fixture: ComponentFixture<ReporteprecioAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteprecioAlojamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteprecioAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
