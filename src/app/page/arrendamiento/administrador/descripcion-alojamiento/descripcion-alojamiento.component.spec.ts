import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionAlojamientoComponent } from './descripcion-alojamiento.component';

describe('DescripcionAlojamientoComponent', () => {
  let component: DescripcionAlojamientoComponent;
  let fixture: ComponentFixture<DescripcionAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionAlojamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
