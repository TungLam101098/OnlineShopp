import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenskirtsComponent } from './womenskirts.component';

describe('WomenskirtsComponent', () => {
  let component: WomenskirtsComponent;
  let fixture: ComponentFixture<WomenskirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenskirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenskirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
