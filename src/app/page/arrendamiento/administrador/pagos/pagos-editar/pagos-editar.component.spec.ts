import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosEditarComponent } from './pagos-editar.component';

describe('PagosEditarComponent', () => {
  let component: PagosEditarComponent;
  let fixture: ComponentFixture<PagosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
