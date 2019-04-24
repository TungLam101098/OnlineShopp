import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenlocketsComponent } from './womenlockets.component';

describe('WomenlocketsComponent', () => {
  let component: WomenlocketsComponent;
  let fixture: ComponentFixture<WomenlocketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenlocketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenlocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
