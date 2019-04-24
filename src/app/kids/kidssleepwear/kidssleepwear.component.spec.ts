import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidssleepwearComponent } from './kidssleepwear.component';

describe('KidssleepwearComponent', () => {
  let component: KidssleepwearComponent;
  let fixture: ComponentFixture<KidssleepwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidssleepwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidssleepwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
