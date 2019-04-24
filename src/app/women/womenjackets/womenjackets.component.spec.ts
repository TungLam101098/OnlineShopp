import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjacketsComponent } from './womenjackets.component';

describe('WomenjacketsComponent', () => {
  let component: WomenjacketsComponent;
  let fixture: ComponentFixture<WomenjacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenjacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenjacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
