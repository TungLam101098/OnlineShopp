import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsloafersComponent } from './kidsloafers.component';

describe('KidsloafersComponent', () => {
  let component: KidsloafersComponent;
  let fixture: ComponentFixture<KidsloafersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsloafersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsloafersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
