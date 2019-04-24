import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomentopsComponent } from './womentops.component';

describe('WomentopsComponent', () => {
  let component: WomentopsComponent;
  let fixture: ComponentFixture<WomentopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomentopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomentopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
