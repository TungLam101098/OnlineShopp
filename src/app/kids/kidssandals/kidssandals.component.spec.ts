import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidssandalsComponent } from './kidssandals.component';

describe('KidssandalsComponent', () => {
  let component: KidssandalsComponent;
  let fixture: ComponentFixture<KidssandalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidssandalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidssandalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
