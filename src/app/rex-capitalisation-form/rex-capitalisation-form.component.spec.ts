import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexCapitalisationFormComponent } from './rex-capitalisation-form.component';

describe('RexCapitalisationFormComponent', () => {
  let component: RexCapitalisationFormComponent;
  let fixture: ComponentFixture<RexCapitalisationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexCapitalisationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexCapitalisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
