import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagrapheRedLineComponent } from './paragraphe-red-line.component';

describe('ParagrapheRedLineComponent', () => {
  let component: ParagrapheRedLineComponent;
  let fixture: ComponentFixture<ParagrapheRedLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagrapheRedLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagrapheRedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
