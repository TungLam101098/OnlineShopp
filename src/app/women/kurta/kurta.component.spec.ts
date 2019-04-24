import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtaComponent } from './kurta.component';

describe('KurtaComponent', () => {
  let component: KurtaComponent;
  let fixture: ComponentFixture<KurtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
