import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineThreeDComponent } from './timeline-three-d.component';

describe('TimelineThreeDComponent', () => {
  let component: TimelineThreeDComponent;
  let fixture: ComponentFixture<TimelineThreeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineThreeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
