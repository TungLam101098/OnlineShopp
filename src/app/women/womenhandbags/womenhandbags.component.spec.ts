import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenhandbagsComponent } from './womenhandbags.component';

describe('WomenhandbagsComponent', () => {
  let component: WomenhandbagsComponent;
  let fixture: ComponentFixture<WomenhandbagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenhandbagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenhandbagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
