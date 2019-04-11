import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaballerosComponent } from './caballeros.component';

describe('CaballerosComponent', () => {
  let component: CaballerosComponent;
  let fixture: ComponentFixture<CaballerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaballerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaballerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
