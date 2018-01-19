import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitrePrincipalComponent } from './titre-principal.component';

describe('TitrePrincipalComponent', () => {
  let component: TitrePrincipalComponent;
  let fixture: ComponentFixture<TitrePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitrePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitrePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
