import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsstandardComponent } from './kidsstandard.component';

describe('KidsstandardComponent', () => {
  let component: KidsstandardComponent;
  let fixture: ComponentFixture<KidsstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
