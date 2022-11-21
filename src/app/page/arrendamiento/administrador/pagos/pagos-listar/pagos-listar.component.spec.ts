import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosListarComponent } from './pagos-listar.component';

describe('PagosListarComponent', () => {
  let component: PagosListarComponent;
  let fixture: ComponentFixture<PagosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
