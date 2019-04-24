import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenskincareComponent } from './womenskincare.component';

describe('WomenskincareComponent', () => {
  let component: WomenskincareComponent;
  let fixture: ComponentFixture<WomenskincareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenskincareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenskincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
