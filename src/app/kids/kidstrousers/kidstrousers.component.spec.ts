import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidstrousersComponent } from './kidstrousers.component';

describe('KidstrousersComponent', () => {
  let component: KidstrousersComponent;
  let fixture: ComponentFixture<KidstrousersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidstrousersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidstrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
