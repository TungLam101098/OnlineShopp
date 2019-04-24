import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsjeansComponent } from './kidsjeans.component';

describe('KidsjeansComponent', () => {
  let component: KidsjeansComponent;
  let fixture: ComponentFixture<KidsjeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsjeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
