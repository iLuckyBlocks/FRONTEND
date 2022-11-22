import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientosEditarComponent } from './alojamientos-editar.component';

describe('AlojamientosEditarComponent', () => {
  let component: AlojamientosEditarComponent;
  let fixture: ComponentFixture<AlojamientosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamientosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlojamientosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
