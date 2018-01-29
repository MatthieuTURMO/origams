import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexTimelineFormComponent } from './rex-timeline-form.component';

describe('RexTimelineFormComponent', () => {
  let component: RexTimelineFormComponent;
  let fixture: ComponentFixture<RexTimelineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexTimelineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexTimelineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
