import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomentrousersComponent } from './womentrousers.component';

describe('WomentrousersComponent', () => {
  let component: WomentrousersComponent;
  let fixture: ComponentFixture<WomentrousersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomentrousersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomentrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
