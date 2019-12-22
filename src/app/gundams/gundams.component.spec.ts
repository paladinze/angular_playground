import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamsComponent } from './gundams.component';

describe('GundamsComponent', () => {
  let component: GundamsComponent;
  let fixture: ComponentFixture<GundamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GundamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GundamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
