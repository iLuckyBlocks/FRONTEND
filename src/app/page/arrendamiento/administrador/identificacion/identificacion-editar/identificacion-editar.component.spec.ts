import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionEditarComponent } from './identificacion-editar.component';

describe('IdentificacionEditarComponent', () => {
  let component: IdentificacionEditarComponent;
  let fixture: ComponentFixture<IdentificacionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
