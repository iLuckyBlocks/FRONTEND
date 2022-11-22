import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionListarComponent } from './identificacion-listar.component';

describe('IdentificacionListarComponent', () => {
  let component: IdentificacionListarComponent;
  let fixture: ComponentFixture<IdentificacionListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
