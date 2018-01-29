import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousTitreComponent } from './sous-titre.component';

describe('SousTitreComponent', () => {
  let component: SousTitreComponent;
  let fixture: ComponentFixture<SousTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
