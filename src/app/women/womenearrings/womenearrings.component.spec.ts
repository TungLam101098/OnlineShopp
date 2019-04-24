import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenearringsComponent } from './womenearrings.component';

describe('WomenearringsComponent', () => {
  let component: WomenearringsComponent;
  let fixture: ComponentFixture<WomenearringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenearringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenearringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
