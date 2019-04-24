import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenperfumesComponent } from './womenperfumes.component';

describe('WomenperfumesComponent', () => {
  let component: WomenperfumesComponent;
  let fixture: ComponentFixture<WomenperfumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenperfumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenperfumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
