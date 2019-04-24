import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadfersComponent } from './loadfers.component';

describe('LoadfersComponent', () => {
  let component: LoadfersComponent;
  let fixture: ComponentFixture<LoadfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
