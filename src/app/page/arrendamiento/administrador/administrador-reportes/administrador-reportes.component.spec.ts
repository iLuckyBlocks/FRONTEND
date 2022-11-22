import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorReportesComponent } from './administrador-reportes.component';

describe('AdministradorReportesComponent', () => {
  let component: AdministradorReportesComponent;
  let fixture: ComponentFixture<AdministradorReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
