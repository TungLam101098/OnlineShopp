import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensunglasesComponent } from './womensunglases.component';

describe('WomensunglasesComponent', () => {
  let component: WomensunglasesComponent;
  let fixture: ComponentFixture<WomensunglasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensunglasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensunglasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
