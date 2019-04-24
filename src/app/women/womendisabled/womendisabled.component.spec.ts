import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendisabledComponent } from './womendisabled.component';

describe('WomendisabledComponent', () => {
  let component: WomendisabledComponent;
  let fixture: ComponentFixture<WomendisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomendisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomendisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
