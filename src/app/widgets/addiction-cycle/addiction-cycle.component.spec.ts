import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddictionCycleComponent } from './addiction-cycle.component';

describe('AddictionCycleComponent', () => {
  let component: AddictionCycleComponent;
  let fixture: ComponentFixture<AddictionCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddictionCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddictionCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
