import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenpolotshirtsComponent } from './womenpolotshirts.component';

describe('WomenpolotshirtsComponent', () => {
  let component: WomenpolotshirtsComponent;
  let fixture: ComponentFixture<WomenpolotshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenpolotshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenpolotshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
