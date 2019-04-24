import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensportsComponent } from './womensports.component';

describe('WomensportsComponent', () => {
  let component: WomensportsComponent;
  let fixture: ComponentFixture<WomensportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
