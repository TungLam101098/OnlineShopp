import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidscasualComponent } from './kidscasual.component';

describe('KidscasualComponent', () => {
  let component: KidscasualComponent;
  let fixture: ComponentFixture<KidscasualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidscasualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidscasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
