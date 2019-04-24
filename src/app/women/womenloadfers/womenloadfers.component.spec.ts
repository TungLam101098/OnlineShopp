import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenloadfersComponent } from './womenloadfers.component';

describe('WomenloadfersComponent', () => {
  let component: WomenloadfersComponent;
  let fixture: ComponentFixture<WomenloadfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenloadfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenloadfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
