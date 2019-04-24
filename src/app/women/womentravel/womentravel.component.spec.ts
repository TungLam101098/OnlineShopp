import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomentravelComponent } from './womentravel.component';

describe('WomentravelComponent', () => {
  let component: WomentravelComponent;
  let fixture: ComponentFixture<WomentravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomentravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomentravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
