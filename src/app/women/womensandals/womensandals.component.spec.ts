import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensandalsComponent } from './womensandals.component';

describe('WomensandalsComponent', () => {
  let component: WomensandalsComponent;
  let fixture: ComponentFixture<WomensandalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensandalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensandalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
