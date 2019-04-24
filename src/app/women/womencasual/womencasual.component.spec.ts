import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomencasualComponent } from './womencasual.component';

describe('WomencasualComponent', () => {
  let component: WomencasualComponent;
  let fixture: ComponentFixture<WomencasualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomencasualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomencasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
