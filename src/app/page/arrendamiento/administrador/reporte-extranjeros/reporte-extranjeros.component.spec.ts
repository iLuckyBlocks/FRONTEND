import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteExtranjerosComponent } from './reporte-extranjeros.component';

describe('ReporteExtranjerosComponent', () => {
  let component: ReporteExtranjerosComponent;
  let fixture: ComponentFixture<ReporteExtranjerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteExtranjerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteExtranjerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
