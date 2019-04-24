import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenwalletsComponent } from './womenwallets.component';

describe('WomenwalletsComponent', () => {
  let component: WomenwalletsComponent;
  let fixture: ComponentFixture<WomenwalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenwalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenwalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
