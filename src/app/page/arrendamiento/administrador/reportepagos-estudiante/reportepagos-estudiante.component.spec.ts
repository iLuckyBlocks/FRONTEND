import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportepagosEstudianteComponent } from './reportepagos-estudiante.component';

describe('ReportepagosEstudianteComponent', () => {
  let component: ReportepagosEstudianteComponent;
  let fixture: ComponentFixture<ReportepagosEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportepagosEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportepagosEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
