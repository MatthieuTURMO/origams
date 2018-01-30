import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexDescriptionFormComponent } from './rex-description-form.component';

describe('RexDescriptionFormComponent', () => {
  let component: RexDescriptionFormComponent;
  let fixture: ComponentFixture<RexDescriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexDescriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
