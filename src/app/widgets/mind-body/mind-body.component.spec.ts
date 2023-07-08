import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindBodyComponent } from './mind-body.component';

describe('MindBodyComponent', () => {
  let component: MindBodyComponent;
  let fixture: ComponentFixture<MindBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
