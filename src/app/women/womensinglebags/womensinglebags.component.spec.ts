import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensinglebagsComponent } from './womensinglebags.component';

describe('WomensinglebagsComponent', () => {
  let component: WomensinglebagsComponent;
  let fixture: ComponentFixture<WomensinglebagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensinglebagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensinglebagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
