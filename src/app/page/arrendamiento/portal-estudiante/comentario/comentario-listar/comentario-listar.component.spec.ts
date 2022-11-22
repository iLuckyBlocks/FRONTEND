import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioListarComponent } from './comentario-listar.component';

describe('ComentarioListarComponent', () => {
  let component: ComentarioListarComponent;
  let fixture: ComponentFixture<ComentarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
