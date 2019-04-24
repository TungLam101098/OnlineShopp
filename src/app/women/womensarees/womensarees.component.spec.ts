import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensareesComponent } from './womensarees.component';

describe('WomensareesComponent', () => {
  let component: WomensareesComponent;
  let fixture: ComponentFixture<WomensareesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensareesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
