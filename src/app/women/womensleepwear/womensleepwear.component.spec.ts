import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensleepwearComponent } from './womensleepwear.component';

describe('WomensleepwearComponent', () => {
  let component: WomensleepwearComponent;
  let fixture: ComponentFixture<WomensleepwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensleepwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensleepwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
