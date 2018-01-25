import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexTimelineVisuComponent } from './rex-timeline-visu.component';

describe('RexTimelineVisuComponent', () => {
  let component: RexTimelineVisuComponent;
  let fixture: ComponentFixture<RexTimelineVisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexTimelineVisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexTimelineVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
