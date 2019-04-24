import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenmakeupComponent } from './womenmakeup.component';

describe('WomenmakeupComponent', () => {
  let component: WomenmakeupComponent;
  let fixture: ComponentFixture<WomenmakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenmakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenmakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
