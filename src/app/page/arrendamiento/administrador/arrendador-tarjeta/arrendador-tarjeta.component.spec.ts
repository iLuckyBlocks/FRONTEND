import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorTarjetaComponent } from './arrendador-tarjeta.component';

describe('ArrendadorTarjetaComponent', () => {
  let component: ArrendadorTarjetaComponent;
  let fixture: ComponentFixture<ArrendadorTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendadorTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendadorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
