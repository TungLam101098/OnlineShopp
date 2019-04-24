import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsshirtsComponent } from './kidsshirts.component';

describe('KidsshirtsComponent', () => {
  let component: KidsshirtsComponent;
  let fixture: ComponentFixture<KidsshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
