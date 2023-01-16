import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculerComponent } from './calculer.component';

describe('CalculerComponent', () => {
  let component: CalculerComponent;
  let fixture: ComponentFixture<CalculerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
