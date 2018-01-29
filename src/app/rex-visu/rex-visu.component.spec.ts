import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexVisuComponent } from './rex-visu.component';

describe('RexVisuComponent', () => {
  let component: RexVisuComponent;
  let fixture: ComponentFixture<RexVisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexVisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
