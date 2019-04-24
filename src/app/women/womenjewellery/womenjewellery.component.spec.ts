import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjewelleryComponent } from './womenjewellery.component';

describe('WomenjewelleryComponent', () => {
  let component: WomenjewelleryComponent;
  let fixture: ComponentFixture<WomenjewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenjewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenjewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
