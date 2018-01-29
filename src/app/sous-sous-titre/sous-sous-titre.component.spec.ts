import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousSousTitreComponent } from './sous-sous-titre.component';

describe('SousSousTitreComponent', () => {
  let component: SousSousTitreComponent;
  let fixture: ComponentFixture<SousSousTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousSousTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousSousTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
