import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjeansComponent } from './womenjeans.component';

describe('WomenjeansComponent', () => {
  let component: WomenjeansComponent;
  let fixture: ComponentFixture<WomenjeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenjeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
