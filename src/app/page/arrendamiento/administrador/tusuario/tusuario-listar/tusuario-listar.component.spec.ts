import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusuarioListarComponent } from './tusuario-listar.component';

describe('TusuarioListarComponent', () => {
  let component: TusuarioListarComponent;
  let fixture: ComponentFixture<TusuarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusuarioListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
