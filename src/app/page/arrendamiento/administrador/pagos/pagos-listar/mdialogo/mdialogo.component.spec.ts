import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDialogoComponent } from './mdialogo.component';

describe('MDialogoComponent', () => {
  let component: MDialogoComponent;
  let fixture: ComponentFixture<MDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
