import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayNoComponent } from './say-no.component';

describe('SayNoComponent', () => {
  let component: SayNoComponent;
  let fixture: ComponentFixture<SayNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
