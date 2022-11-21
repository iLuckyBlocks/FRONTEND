import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusuarioEditarComponent } from './tusuario-editar.component';

describe('TusuarioEditarComponent', () => {
  let component: TusuarioEditarComponent;
  let fixture: ComponentFixture<TusuarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusuarioEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
