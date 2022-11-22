import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdialogoComponent } from './comdialogo.component';

describe('ComdialogoComponent', () => {
  let component: ComdialogoComponent;
  let fixture: ComponentFixture<ComdialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComdialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComdialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
