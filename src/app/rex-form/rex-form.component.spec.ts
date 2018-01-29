import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexFormComponent } from './rex-form.component';

describe('RexFormComponent', () => {
  let component: RexFormComponent;
  let fixture: ComponentFixture<RexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
