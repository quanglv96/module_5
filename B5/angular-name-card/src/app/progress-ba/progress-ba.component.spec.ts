import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBaComponent } from './progress-ba.component';

describe('ProgressBaComponent', () => {
  let component: ProgressBaComponent;
  let fixture: ComponentFixture<ProgressBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
