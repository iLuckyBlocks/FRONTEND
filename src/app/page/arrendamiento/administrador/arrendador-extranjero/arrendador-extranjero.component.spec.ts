import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorExtranjeroComponent } from './arrendador-extranjero.component';

describe('ArrendadorExtranjeroComponent', () => {
  let component: ArrendadorExtranjeroComponent;
  let fixture: ComponentFixture<ArrendadorExtranjeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendadorExtranjeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendadorExtranjeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
