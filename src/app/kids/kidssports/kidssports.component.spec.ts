import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidssportsComponent } from './kidssports.component';

describe('KidssportsComponent', () => {
  let component: KidssportsComponent;
  let fixture: ComponentFixture<KidssportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidssportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidssportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
