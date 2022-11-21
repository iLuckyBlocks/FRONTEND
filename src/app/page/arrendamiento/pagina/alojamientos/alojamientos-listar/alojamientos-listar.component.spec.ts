import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientosListarComponent } from './alojamientos-listar.component';

describe('AlojamientosListarComponent', () => {
  let component: AlojamientosListarComponent;
  let fixture: ComponentFixture<AlojamientosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamientosListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlojamientosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
