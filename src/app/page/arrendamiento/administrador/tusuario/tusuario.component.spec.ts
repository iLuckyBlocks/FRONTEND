import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusuarioComponent } from './tusuario.component';

describe('TusuarioComponent', () => {
  let component: TusuarioComponent;
  let fixture: ComponentFixture<TusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
