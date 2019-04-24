import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenformalComponent } from './womenformal.component';

describe('WomenformalComponent', () => {
  let component: WomenformalComponent;
  let fixture: ComponentFixture<WomenformalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenformalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenformalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
