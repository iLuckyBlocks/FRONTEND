import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedeContratosComponent } from './reportede-contratos.component';

describe('ReportedeContratosComponent', () => {
  let component: ReportedeContratosComponent;
  let fixture: ComponentFixture<ReportedeContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedeContratosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedeContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
