import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetactiveComponent } from './detactive.component';

describe('DetactiveComponent', () => {
  let component: DetactiveComponent;
  let fixture: ComponentFixture<DetactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
