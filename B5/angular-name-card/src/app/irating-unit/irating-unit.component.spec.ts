import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRatingUnitComponent } from './irating-unit.component';

describe('IRatingUnitComponent', () => {
  let component: IRatingUnitComponent;
  let fixture: ComponentFixture<IRatingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRatingUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IRatingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
