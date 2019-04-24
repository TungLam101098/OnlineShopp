import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenringsComponent } from './womenrings.component';

describe('WomenringsComponent', () => {
  let component: WomenringsComponent;
  let fixture: ComponentFixture<WomenringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
