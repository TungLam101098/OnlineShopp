import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomennailComponent } from './womennail.component';

describe('WomennailComponent', () => {
  let component: WomennailComponent;
  let fixture: ComponentFixture<WomennailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomennailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomennailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
