import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDialogoComponent } from './tdialogo.component';

describe('TDialogoComponent', () => {
  let component: TDialogoComponent;
  let fixture: ComponentFixture<TDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
