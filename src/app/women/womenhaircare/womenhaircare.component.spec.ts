import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenhaircareComponent } from './womenhaircare.component';

describe('WomenhaircareComponent', () => {
  let component: WomenhaircareComponent;
  let fixture: ComponentFixture<WomenhaircareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenhaircareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenhaircareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
