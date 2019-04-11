import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamasComponent } from './damas.component';

describe('DamasComponent', () => {
  let component: DamasComponent;
  let fixture: ComponentFixture<DamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
