import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportallComponent } from './sportall.component';

describe('SportallComponent', () => {
  let component: SportallComponent;
  let fixture: ComponentFixture<SportallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
