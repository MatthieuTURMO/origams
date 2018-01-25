import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousSousTitre2Component } from './sous-sous-titre-2.component';

describe('SousSousTitre2Component', () => {
  let component: SousSousTitre2Component;
  let fixture: ComponentFixture<SousSousTitre2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousSousTitre2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousSousTitre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
