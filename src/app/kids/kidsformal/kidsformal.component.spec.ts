import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsformalComponent } from './kidsformal.component';

describe('KidsformalComponent', () => {
  let component: KidsformalComponent;
  let fixture: ComponentFixture<KidsformalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsformalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsformalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
